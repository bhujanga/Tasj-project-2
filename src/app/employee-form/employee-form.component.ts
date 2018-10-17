import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { EmployeeDetails } from './employee-form.classes';
import { EmployeeeService } from '../employeee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employeeDetails: EmployeeDetails;
  @Output() formSubmitted = new EventEmitter(); 
  @ViewChild('employeeForm') employeeForm: NgForm;

  constructor(public employeeService: EmployeeeService) {
    this.employeeDetails = new EmployeeDetails();
   
   }

  ngOnInit() {
    console.log(this.employeeForm);
  }

  submitEmployeeDetails(){
    if(this.employeeForm.valid == true)
    {
   this.employeeService.submitEmployee(this.employeeDetails).subscribe(
     (data) => {
      this.formSubmitted.emit('Form Submitted');
     },
     (error) => {
       
     }
   );
  }
}
}
