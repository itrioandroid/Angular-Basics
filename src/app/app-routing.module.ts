import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { StudentsComponent } from './students/students.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [
  {path : '' , redirectTo :'/departments' , pathMatch : 'full'},
  {path : 'departments' , component : DepartmentsComponent},
  {path : 'departments/:id' , 
  component : DepartmentDetailsComponent,
  children:[
    {path : 'overview',component : DepartmentOverviewComponent},
    {path : 'contact' , component : DepartmentContactComponent}
  ]
},
  {path : 'students', component : StudentsComponent},
  {path : "**", component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentsComponent,
                                  StudentsComponent,
                                  PageNotFoundComponent,
                                  DepartmentDetailsComponent,
                                  DepartmentOverviewComponent,
                                  DepartmentContactComponent];
