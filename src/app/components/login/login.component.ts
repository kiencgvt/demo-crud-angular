import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup | undefined;
  errMessage = '';
  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  submit()  {
    let data = this.formLogin?.value;
    this.authService.login(data).subscribe(response => {
      console.log(response);
      localStorage.setItem('token', JSON.stringify(response.access_token));
      localStorage.setItem('userLogin', JSON.stringify(response.user));
      this.router.navigate(['/users']).then(r => {
        console.log('success')
      })
    }, errors => {
      console.log(errors.error)
    })
  }

}
