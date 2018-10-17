import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EmployeeDetails} from '../employee-form/employee-form.classes';
import { EmployeeeService } from '../employeee.service';


@Component({
  selector: 'app-multiple-forms',
  templateUrl: './multiple-forms.component.html',
  styleUrls: ['./multiple-forms.component.css']
})
export class MultipleFormsComponent implements OnInit {
  employeeDetailsArray: EmployeeDetails[] = [];
  @Output() formSubmitted = new EventEmitter();
  constructor(public employeeService: EmployeeeService) {
    for ( let i = 0; i < 3; i++ )
    {
      this.employeeDetailsArray.push(new EmployeeDetails());
    }
  }

  ngOnInit() {
  }

  submitEmployeeDetails() {
    let validForms: EmployeeDetails[] = [];
    this.employeeDetailsArray.map(
      (data) => {
        if ( data.mobile !== '') {
          validForms.push(data);
         }
      }
    )
    console.log(validForms);
      this.employeeService.submitEmployeesList(validForms).subscribe(
        (data) => {

        },
        (error) => {
          console.log('Success');
          this.formSubmitted.emit('Form Submitted');
        }
      );
    }
}
