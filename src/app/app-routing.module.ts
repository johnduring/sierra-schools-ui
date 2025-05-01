import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components here
import { StudentListComponent } from './students/student-list/student-list.component';
import { TeacherListComponent } from './teachers/teacher-list/teacher-list.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { StaffListComponent } from './staffs/staff-list/staff-list.component';
import { RoleListComponent } from './roles/role-list/role-list.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' }, // Default route
  { path: 'students', component: StudentListComponent },
  { path: 'teachers', component: TeacherListComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'staffs', component: StaffListComponent },
  { path: 'roles', component: RoleListComponent },
  { path: 'users', component: UserListComponent },
  { path: 'login', component: LoginComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuring the router module
  exports: [RouterModule] // Exporting the RouterModule for use in other modules
})
export class AppRoutingModule { }
