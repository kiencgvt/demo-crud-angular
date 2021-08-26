import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAll().subscribe(res => {
      this.users = res;
    })
  }

  deleteUser(id: any) {
    if (confirm('Are You Sure?')) {
      this.userService.deleteUser(id).subscribe(res => {
        this.users = res.users;
      })
    }
  }
}
