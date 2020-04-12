import { Injectable } from '@angular/core';
import { BookEntityService } from './book-entity.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, filter, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksResolverService {
  constructor(private booksService: BookEntityService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.booksService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          // it will make backend call and store data in Store
          this.booksService.getAll();
        }
      }),
      filter((loaded) => !!loaded),
      first()
    );
  }
}
