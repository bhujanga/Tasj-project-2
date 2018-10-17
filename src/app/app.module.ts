import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MultipleFormsComponent } from './multiple-forms/multiple-forms.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeeTableComponent,
    MultipleFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
