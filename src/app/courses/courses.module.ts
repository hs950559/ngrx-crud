import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { MaterialModule } from '../shared/material/material.module';
import {
  EntityDefinitionService,
  EntityDataService,
  EntityMetadataMap,
} from '@ngrx/data';
import { CoursesDataService } from './services/courses-data.service';
import { CourseEntityService } from './services/course-entity.service';
import { CoursesResolverService } from './services/courses-resolver.service';

const entityMetadata: EntityMetadataMap = {
  Course: {},
};

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, CoursesRoutingModule, MaterialModule],
  providers: [
    // CoursesHttpService,
    CourseEntityService,
    CoursesResolverService,
    CoursesDataService,
  ],
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
