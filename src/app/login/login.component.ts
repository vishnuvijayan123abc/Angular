import { Component } from '@angular/core';
import{FormControl,FormGroup, Validators}from "@angular/forms"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform= new FormGroup(
    {
      username:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required)
    }
  )
  login(){
    console.log(this.loginform.value);
    
  }

}
