import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any>{
    return this.http.post(environment.url_api + 'login', data);
  }

  setHeader() {
    let token = JSON.parse(<string>localStorage.getItem('token'));
    return new HttpHeaders().set("Authorization", "Bearer " + token);
  }

  getUser() {
    return localStorage.getItem('userLogin');
  }

  logout() : Observable<any>{
    return this.http.post(environment.url_api + 'auth/logout', null, {headers: this.setHeader()})
  }

  register(data: any): Observable<any> {
    return  this.http.post(environment.url_api + 'register', data);
  }

}
