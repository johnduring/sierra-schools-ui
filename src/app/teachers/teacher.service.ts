import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TeacherService {
  private apiUrl = 'http://localhost:8080/api/teachers';

  constructor(private http: HttpClient) {}

  getTeachers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTeacher(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createTeacher(teacher: any): Observable<any> {
    return this.http.post(this.apiUrl, teacher);
  }

  updateTeacher(id: number, teacher: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, teacher);
  }

  deleteTeacher(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
