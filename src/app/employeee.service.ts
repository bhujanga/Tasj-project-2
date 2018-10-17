import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeDetails } from './employee-form/employee-form.classes';

@Injectable({
  providedIn: 'root'
})
export class EmployeeeService {

  constructor(private httpClient: HttpClient) { }

  submitEmployee(employeeDetails: EmployeeDetails) {
    return this.httpClient.post<any>('http://localhost:8080/create', employeeDetails);
  }

  getEmployees() {
    return this.httpClient.get<any>('http://localhost:8080/getAll');
  }

  submitEmployeesList(employeeDetails: EmployeeDetails[]) {
    return this.httpClient.post<any>('http://localhost:8080/createList', employeeDetails);
  }
}
