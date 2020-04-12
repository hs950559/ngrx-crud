import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CoursesResolverService } from './services/courses-resolver.service';
import { CourseComponent } from './course/course.component';

export const coursesRoutes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    resolve: {
      courses: CoursesResolverService,
    },
  },
  {
    path: ':courseUrl',
    component: CourseComponent,
    resolve: {
      courses: CoursesResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
