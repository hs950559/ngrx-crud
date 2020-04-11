import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, CoursesRoutingModule, MaterialModule],
})
export class CoursesModule {}
