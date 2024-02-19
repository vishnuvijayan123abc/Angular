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
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EmiComponent } from './emi/emi.component';
import { NavComponent } from './nav/nav.component';
import { EmployeesComponent } from './employees/employees.component';
import{HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    CubeComponent,
    BmiComponent,
    ConverterComponent,
    MetertocmComponent,
    RegisterComponent,
    LoginComponent,
    EmiComponent,
    NavComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
