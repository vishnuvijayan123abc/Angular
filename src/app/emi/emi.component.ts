import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent {
  emiform=new FormGroup(
    {
      amount:new FormControl("",Validators.required),
      interest:new FormControl("",Validators.required),
      tenure:new FormControl("",Validators.required)
    }
  )
  get amount(){
    return this.emiform.get('amount')
  }
  get interest(){
    return this.emiform.get('interest')
  }
  get tenure(){
    return this.emiform.get('tenure')
  }
  

}
