import { Component, OnInit, Input } from '@angular/core';
import { EmployeeDetails } from '../employee-form/employee-form.classes';


@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
  @Input() employeeDetails: EmployeeDetails[] = [];
  constructor() { }

  ngOnInit() {
  console.log(this.employeeDetails);
  }

}
