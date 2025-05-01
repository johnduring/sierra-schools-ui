import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class StaffService {
  private apiUrl = 'http://localhost:8080/api/staffs';

  constructor(private http: HttpClient) {}

  getStaffs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getStaff(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createStaff(staff: any): Observable<any> {
    return this.http.post(this.apiUrl, staff);
  }

  updateStaff(id: number, staff: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, staff);
  }

  deleteStaff(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
