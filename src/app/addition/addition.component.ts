import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {
  result:number=0


  performaddition(b1:any,b2:any){
    let n1=+b1.value
    let n2=+b2.value
    this.result=n1+n2
    
    

  
  }

}
