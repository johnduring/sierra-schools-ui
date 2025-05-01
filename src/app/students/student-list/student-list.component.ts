import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service'; // Assuming a student service exists

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: any[] = []; // List of students

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    // Fetch the students from the service
    this.studentService.getStudents().subscribe((data: any[]) => {
      this.students = data;
    });
  }
}
