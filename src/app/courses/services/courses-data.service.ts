import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from 'src/app/model/course';

@Injectable()
export class CoursesDataService extends DefaultDataService<Course> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Course', http, httpUrlGenerator);
  }

  getAll(): Observable<Course[]> {
    return this.http.get('/api/courses').pipe(map((res: any) => res.payload));
  }

  // update(course): Observable<Course> {
  //   return this.http
  //     .put(`/api/courses/${course.id}`, course)
  //     .pipe(map((res: any) => res));
  // }
}
