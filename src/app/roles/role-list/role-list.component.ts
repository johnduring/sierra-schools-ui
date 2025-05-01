import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../roles/role.service';
@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  roles: any[] = []; // List of roles

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    // Fetch the roles from the service
    this.roleService.getRoles().subscribe((data) => {
      this.roles = data;
    });
  }
}
