import { Component } from '@angular/core';
import{HttpClient}from '@angular/common/http'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  employees:any

  constructor(private http:HttpClient){
    // fetch("https://jsonplaceholder.typicode.com/users/").then(res=>res.json()).then(data=>this.employees=data)
    this.http.get("https://jsonplaceholder.typicode.com/users/").subscribe(data=>this.employees=data)
  }

}
