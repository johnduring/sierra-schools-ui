import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class RoleService {
  private apiUrl = 'http://localhost:8080/api/roles';

  constructor(private http: HttpClient) {}

  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getRole(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createRole(role: any): Observable<any> {
    return this.http.post(this.apiUrl, role);
  }

  deleteRole(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
