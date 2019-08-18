import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url=`https://api.github.com/users`;
  constructor(private http:HttpClient) { 

  }
  getUser():Observable<any>{
    // get call for userinformation
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }
  userDetails(obj:any){
    // get call for repo informaton
    return this.http.get(obj.repos_url).pipe(catchError(this.handleError));
  }
  handleError(error:HttpErrorResponse){
   return throwError(`something went wrong ${error.message}`);  
   }
}
