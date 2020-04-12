import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { CourseEntityService } from './services/course-entity.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;
  promoTotal$: Observable<number>;

  constructor(private coursesService: CourseEntityService) {}

  ngOnInit() {
    this.beginnerCourses$ = this.coursesService.entities$.pipe(
      map((courses) =>
        courses.filter((course) => course.category === 'BEGINNER')
      )
    );

    this.advancedCourses$ = this.coursesService.entities$.pipe(
      map((courses) =>
        courses.filter((course) => course.category === 'ADVANCED')
      )
    );

    this.promoTotal$ = this.coursesService.entities$.pipe(
      map((courses) => courses.filter((course) => course.promo).length)
    );
  }
}
