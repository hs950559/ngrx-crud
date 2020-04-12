import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from 'src/app/model/book';

@Injectable()
export class BooksDataService extends DefaultDataService<Book> {
  BASE_URL = 'https://hkauthapi.herokuapp.com/books/';

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Book', http, httpUrlGenerator);
  }

  getAll(): Observable<Book[]> {
    return this.http.get(this.BASE_URL).pipe(map((res: any) => res));
  }

  update(book): Observable<Book> {
    console.log(book, 'HEMANT');
    return this.http
      .put(`${this.BASE_URL}/${book.id}`, book.changes)
      .pipe(map((res: any) => res));
  }

  delete(bookId) {
    return this.http
      .delete(this.BASE_URL + bookId)
      .pipe(map((res: any) => res));
  }
}
