import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SummaryPipe } from './summary.pipe';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { RepeatDirective } from './repeat.directive';
import { MessageDirective } from './message.directive';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SummaryPipe,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    routingComponents,
    RepeatDirective,
    MessageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
