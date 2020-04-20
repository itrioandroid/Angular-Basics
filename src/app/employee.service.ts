import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  public _url:string = "/assets/data/employees.json";
  constructor(private http:HttpClient) { }

  getEmployees():Observable<IEmployee[]>{ 
    /*Definig return type of method is completely optional.
    It only proves that return type of set() is Obervables.*/
    return this.http.get<IEmployee[]>(this._url)
                    .pipe(catchError(this.errorHandler))
     
  }
  /* Change _url value to see affect of below method*/
  errorHandler(error : HttpErrorResponse){
    return Observable.throw(error.message || "Server Error.");
  }
}
