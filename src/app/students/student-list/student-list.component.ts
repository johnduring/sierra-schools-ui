import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from './../student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentService: StudentService) { }
    ngOnInit(): void {
    this.studentService.getAllStudents().subscribe({
      next: (data) => this.students = data,
      error: (err) => console.error('Failed to fetch students', err)
    });
  }

}

