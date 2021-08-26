import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient,
              private authService: AuthService) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get(environment.url_api + 'users', {headers: this.authService.setHeader()});
  }

  addUser(data: any): Observable<any> {
    return this.httpClient.post(environment.url_api + 'users/create', data, {headers: this.authService.setHeader()});
  }

  deleteUser(id: any): Observable<any> {
    return this.httpClient.get(environment.url_api + 'users/' + id +'/delete', {headers: this.authService.setHeader()});
  }
}
