import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule,MatDrawerMode} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AllAppointmentsComponent } from './components/all-appointments/all-appointments.component';
import { SearchfilterPipe } from './pipe/searchfilter.pipe';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { PatientsComponent } from './components/patients/patients.component';
import { AddpatientComponent } from './components/addpatient/addpatient.component';
import { FormsModule } from '@angular/forms';
import { AuthguardServiceService } from './Services/Authguard/authguard-service.service';
import { AuthenticationGuard } from './Guard/authenticationguard.guard';
import { DoctorprofileComponent } from './components/doctorprofile/doctorprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    AppointmentComponent,
    AllAppointmentsComponent,
    SearchfilterPipe,
    DoctorsComponent,
    PatientsComponent,
    AddpatientComponent,
    DoctorprofileComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,MatIconModule,ReactiveFormsModule,MatTableModule,MatListModule,FormsModule,
    AppRoutingModule,MatFormFieldModule,MatInputModule,MatSlideToggleModule,MatToolbarModule,MatBadgeModule,
    BrowserAnimationsModule,MatButtonModule,MatMenuModule,MatSidenavModule,MatDialogModule
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
