import { Component } from '@angular/core';
import{FormControl,FormGroup, Validators}from "@angular/forms"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  regform=new FormGroup(
    {
      username:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required)
    }
  )
  get username(){
    return this.regform.get('username')
  }
  get email(){
    return this.regform.get('email')
  }
  get password(){
    return this.regform.get('password')
  }
  signup(){
    console.log(this.regform.value);
    
  }

}
