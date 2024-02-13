import { Component } from '@angular/core';

@Component({
  selector: 'app-metertocm',
  templateUrl: './metertocm.component.html',
  styleUrls: ['./metertocm.component.css']
})
export class MetertocmComponent {
  meter:number=0
  cm:number=0

  converttometer(){
    this.meter=this.cm/100
  }
  converttocm(){
    this.cm=this.meter*100
  }

}
