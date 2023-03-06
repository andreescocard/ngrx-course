import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CourseEntityService } from "./course-entity.service";

export class CoursesResolver implements Resolve<Boolean>{

    constructor(private coursesService: CourseEntityService){

    }
    
    resolve(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<Boolean> {

        return this.coursesService.getAll()
        .pipe(
            map(courses => !!courses)
        );
    }
    
}