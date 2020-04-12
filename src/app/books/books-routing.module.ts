import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { BookComponent } from './book/book.component';
import { BooksResolverService } from './services/books-resolver.service';

export const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    resolve: {
      courses: BooksResolverService,
    },
  },
  {
    path: ':bookId',
    component: BookComponent,
    // resolve: {
    //   courses: BooksresolverService,
    // },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
