import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { CourseEntityService } from './services/course-entity.service';
import { map } from 'rxjs/operators';
import { defaultDialogConfig } from '../shared/default-dialog-config';
import { EditCourseDialogComponent } from './edit-course-dialog/edit-course-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;
  promoTotal$: Observable<number>;

  constructor(
    private dialog: MatDialog,
    private coursesService: CourseEntityService
  ) {}

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

  onAddCourse() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Create Course',
      mode: 'create',
    };

    this.dialog.open(EditCourseDialogComponent, dialogConfig);
  }
}
