import { Component, OnInit } from '@angular/core';
import { UserService } from '../../users/user.service'; // Assuming a user service exists

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = []; // List of users

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Fetch user data from the service
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
