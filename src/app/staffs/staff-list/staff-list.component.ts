import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service'; // Assuming a staff service exists

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  staff: any[] = []; // List of staff members

  constructor(private staffService: StaffService) { }

  ngOnInit(): void {
    // Fetch the staff data from the service
    this.staffService.getStaffs().subscribe((data) => {
      this.staff = data;
    });
  }
}
