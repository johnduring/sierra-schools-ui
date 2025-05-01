import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CourseService {
  private apiUrl = 'http://localhost:8080/api/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCourse(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createCourse(course: any): Observable<any> {
    return this.http.post(this.apiUrl, course);
  }

  updateCourse(id: number, course: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, course);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
