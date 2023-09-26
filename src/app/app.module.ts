import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';
import { SearchfilterPipe } from './pipe/searchfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    AppointmentComponent,
    AllAppointmentsComponent,
    SearchfilterPipe
  ],
  imports: [
    BrowserModule,HttpClientModule,MatIconModule,ReactiveFormsModule,MatTableModule,
    AppRoutingModule,MatFormFieldModule,MatInputModule,MatSlideToggleModule,
    BrowserAnimationsModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
