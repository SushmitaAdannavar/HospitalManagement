import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {path:'dashboard',component:DashboardComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'allAppointments',component:AllAppointmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
