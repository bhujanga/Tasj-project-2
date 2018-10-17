import { Component, OnInit } from '@angular/core';
import { EmployeeeService } from './employeee.service';
import { EmployeeDetails } from './employee-form/employee-form.classes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit
{
  title = 'sample-demo-angular';
  employeeDetails: EmployeeDetails[] = [];
  constructor(public employeeService: EmployeeeService) {
  }

  ngOnInit(){
    this.getEmployees();
  }
  
  getEmployees(){
    console.log('app component');
    this.employeeService.getEmployees().subscribe(
      (data) => {
        this.employeeDetails = data;
        console.log('app component');
        console.log(this.employeeDetails);
      },
      (error) => {
  
      }
    )
  }
}
