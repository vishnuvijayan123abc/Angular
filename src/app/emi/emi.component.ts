import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent {
  emi:number=0
  totalamount:number=0
  totalinterest:number=0
 
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
  
  calculateEmi(){
    console.log(this.interest?.value);
    console.log(this.amount?.value);
    console.log(this.tenure?.value);
    let p=Number(this.amount?.value)
    let r=Number(this.interest?.value)/12
    let n=Number(this.tenure?.value)*12
    let i=r/100

    let oneplusi=(1+i)**n
    this.emi=Math.round((p*i*oneplusi)/(oneplusi-1))
    this.totalamount=this.emi*n
    this.totalinterest=this.totalamount-p
    
    





    
    
    
    

  }
  

}
