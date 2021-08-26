import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {RoleService} from "../../../services/role.service";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  formAddUser: FormGroup | undefined;
  roles: any;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private roleService: RoleService) { }

  ngOnInit(): void {
    this.formAddUser = this.fb.group({
      name: [''],
      email: [''],
      role: [''],
      password: [''],
      password_confirmation: ['']
    })
    this.roleService.getAll().subscribe(res => {
      this.roles = res;
    });
  }

  submit() {
    let data = this.formAddUser?.value;
    this.userService.addUser(data).subscribe(res => {
      this.router.navigate(['users']).then(r => console.log('add success'));
    })
  }
}
