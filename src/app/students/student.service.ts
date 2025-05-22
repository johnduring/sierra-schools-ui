import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private apiUrl = 'http://localhost:8080/api/students';

  constructor(private httpClient: HttpClient) {}

  getAllStudents(): Observable<any[]> {
    return this.httpClient.get<Student[]>(this.apiUrl);
  }

  getStudent(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`);
  }

  createStudent(student: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, student);
  }

  updateStudent(id: number, student: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
