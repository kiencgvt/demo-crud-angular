import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  getAll(): Observable<any> {
    return this.http.get(environment.url_api + 'roles/list', {headers: this.authService.setHeader()})
  }

}
