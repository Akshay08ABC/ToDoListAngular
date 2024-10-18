import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from 'src/app/ApiService/employee-api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  employeeList:any = [];
  constructor(private service:EmployeeApiService){
  }
  ngOnInit(): void {
    this.service.getEmployeeList().subscribe(data=>{
      this.employeeList = data;
    });
  }  
}
