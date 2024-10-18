import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {
  readonly baseUrl = "https://localhost:7026/api/employee/";
  constructor(private http: HttpClient) { }

  getEmployeeList(){
    return this.http.get(this.baseUrl);
  }
  login(loginDetails:any){
    return this.http.post("https://localhost:7169/api/User/login", loginDetails, {responseType: 'text'});   
  }
}
