import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CoursesHttpService} from './services/courses-http.service';
import {concatMap, map} from 'rxjs/operators';
import {allCoursesLoaded} from './course.actions';
import { CourseActions } from './action.types';

@Injectable()
export class CoursesEffects{

    loadCourses$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(CourseActions.loadAllCourses),
                concatMap(action =>
                    this.coursesHttpService.findAllCourses()),
                map(courses => allCoursesLoaded({courses}))

            )
    );

    constructor(private actions$: Actions, private coursesHttpService: CoursesHttpService){
        
    }

}