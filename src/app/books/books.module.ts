import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookComponent } from './book/book.component';
import { BookEntityService } from './services/book-entity.service';
import { BooksDataService } from './services/books-data.service';
import { BooksResolverService } from './services/books-resolver.service';
import {
  EntityMetadataMap,
  EntityDefinitionService,
  EntityDataService,
} from '@ngrx/data';
import { MaterialModule } from '../shared/material.module';
import { EditBookDialogComponent } from './edit-book-dialog/edit-book-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

const entityMetadata: EntityMetadataMap = {
  Book: {
    selectId(entity) {
      return entity == null ? undefined : entity._id;
    },
    entityDispatcherOptions: {
      optimisticUpdate: true,
    },
  },
  // Lesson: {
  //   sortComparer: compareLessons,
  // },
};

@NgModule({
  declarations: [BooksComponent, BookComponent, EditBookDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    MaterialModule,
  ],
  providers: [BooksResolverService, BookEntityService, BooksDataService],
  entryComponents: [EditBookDialogComponent],
})
export class BooksModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private booksDataService: BooksDataService
  ) {
    eds.registerMetadataMap(entityMetadata);

    entityDataService.registerService('Book', booksDataService);
  }
}
