import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import {
  EntityDefinitionService,
  EntityDataService,
  EntityMetadataMap,
} from '@ngrx/data';
import { CoursesDataService } from './services/courses-data.service';
import { CourseEntityService } from './services/course-entity.service';
import { CoursesResolverService } from './services/courses-resolver.service';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { EditCourseDialogComponent } from './edit-course-dialog/edit-course-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { LessonEntityService } from './services/lesson-entity.service';
import { CourseComponent } from './course/course.component';
import { compareLessons } from '../model/lesson';

const entityMetadata: EntityMetadataMap = {
  Course: {
    entityDispatcherOptions: {
      optimisticUpdate: true,
    },
  },
  Lesson: {
    sortComparer: compareLessons,
  },
};

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesCardListComponent,
    EditCourseDialogComponent,
    CourseComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    // CoursesHttpService,
    CourseEntityService,
    CoursesResolverService,
    CoursesDataService,
    LessonEntityService,
  ],
  entryComponents: [EditCourseDialogComponent],
})
export class CoursesModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private coursesDataService: CoursesDataService
  ) {
    eds.registerMetadataMap(entityMetadata);

    entityDataService.registerService('Course', coursesDataService);
  }
}
