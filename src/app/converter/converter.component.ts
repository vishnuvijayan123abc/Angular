import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  c:number=0
  f:number=0
  rc:number=0
  rf:number=0


  converttof(){
    this.f=(this.c*9/100)+32
    
  }
  converttoc(){
    this.c=(this.rf-32)*5/9

  }

}
