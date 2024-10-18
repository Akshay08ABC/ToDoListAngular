import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeApiService } from 'src/app/ApiService/employee-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted:boolean = false;
  title:string = "validateLogin";
  constructor(private formBuilder:FormBuilder, private service: EmployeeApiService, private router: Router){
  }
  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  onLogin(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    } 
  
    this.service.login(this.loginForm.value).subscribe(res=>{
       if(res == "Success"){
        this.router.navigate(['/about']);        
       }
       else{
        alert("Please Enter Correct Details");
       }
       this.loginForm.reset(); 
    })        
  }
}
