import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { CubeComponent } from './cube/cube.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BmiComponent } from './bmi/bmi.component';
import { ConverterComponent } from './converter/converter.component';
import { MetertocmComponent } from './metertocm/metertocm.component';


@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    CubeComponent,
    BmiComponent,
    ConverterComponent,
    MetertocmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
