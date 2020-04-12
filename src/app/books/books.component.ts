import { Component, OnInit } from '@angular/core';
import { BookEntityService } from './services/book-entity.service';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { defaultDialogConfig } from '../shared/default-dialog-config';
import { MatDialog } from '@angular/material/dialog';
import { EditBookDialogComponent } from './edit-book-dialog/edit-book-dialog.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books$: Observable<Book[]>;
  constructor(
    private dialog: MatDialog,
    private booksService: BookEntityService
  ) {}

  ngOnInit(): void {
    this.books$ = this.booksService.entities$;
  }

  removeBook(book: Book) {
    this.booksService.delete(book);
  }

  editBook(book) {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Edit Course',
      book,
      mode: 'update',
    };

    this.dialog
      .open(EditBookDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe();
  }

  addBook() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Create Book',
      mode: 'create',
    };

    this.dialog.open(EditBookDialogComponent, dialogConfig);
  }
}
