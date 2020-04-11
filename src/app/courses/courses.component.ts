import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor() {}

  ngOnInit() {
    // const courses$ = this.store.courses$;
    // this.beginnerCourses$ = this.store.selectBeginnerCourses();
    // this.advancedCourses$ = this.store.selectAdvancedCourses();
  }
}
