import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookEntityService } from '../services/book-entity.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  book$: Observable<Book>;
  constructor(
    private route: ActivatedRoute,
    private booksService: BookEntityService
  ) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('bookId');
    console.log(bookId, 'HERRE');
    this.book$ = this.booksService.entities$.pipe(
      map((books) => books.find((book) => book._id === bookId))
    );
  }
}
