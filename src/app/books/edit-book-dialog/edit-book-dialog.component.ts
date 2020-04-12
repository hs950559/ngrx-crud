import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from 'src/app/model/book';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookEntityService } from '../services/book-entity.service';

@Component({
  selector: 'app-edit-book-dialog',
  templateUrl: './edit-book-dialog.component.html',
  styleUrls: ['./edit-book-dialog.component.scss'],
})
export class EditBookDialogComponent implements OnInit {
  form: FormGroup;

  dialogTitle: string;

  book: Book;

  mode: 'create' | 'update';

  loading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditBookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private booksService: BookEntityService
  ) {
    this.book = data.book;
    this.mode = data.mode;
  }

  ngOnInit() {
    this.dialogTitle = this.mode === 'create' ? 'Add Book' : 'Update Book';

    const formControls = {
      name: ['', Validators.required],
      author: [''],
      price: [''],
      publishedDate: [new Date()],
    };

    if (this.mode === 'update') {
      this.form = this.fb.group(formControls);
      this.form.patchValue({ ...this.book });
    } else if (this.mode === 'create') {
      this.form = this.fb.group({
        ...formControls,
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {
    const book: Book = {
      ...this.book,
      ...this.form.value,
    };

    if (this.mode === 'update') {
      this.booksService.update(book);

      this.dialogRef.close();
    } else if (this.mode === 'create') {
      this.booksService.add(book).subscribe((newBook) => {
        console.log('New Book', newBook);

        this.dialogRef.close();
      });
    }
  }
}
