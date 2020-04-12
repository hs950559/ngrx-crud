import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Book } from 'src/app/model/book';

@Injectable()
export class BookEntityService extends EntityCollectionServiceBase<Book> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Book', serviceElementsFactory);
  }
}
