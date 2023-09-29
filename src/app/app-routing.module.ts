import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AllAppointmentsComponent } from './components/all-appointments/all-appointments.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { PatientsComponent } from './components/patients/patients.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {path:'appointment',component:AppointmentComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[{path:'doctors',component:DoctorsComponent},
  {path:'allAppointments',component:AllAppointmentsComponent},
  {path:'allPatients',component:PatientsComponent}]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
