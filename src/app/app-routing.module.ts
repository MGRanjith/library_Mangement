import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthenticationComponent } from './auth/authentication/authentication.component';
import { CartComponent } from './dashboard/return/return.component';
import { FormsComponent } from './forms/forms.component';
import { EditComponent } from './edit/edit.component';
import { UsersdetailsComponent } from './usersdetails/usersdetails.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dash', pathMatch: 'full' },
  { path: 'dash',component: DashboardComponent, canActivate: [AuthGuard]},
  {path:'auth',component:AuthenticationComponent},
  {path:'form',component:FormsComponent},
  {path:'return',component:CartComponent},
  {path:'details',component:UsersdetailsComponent},
  { path: 'edit/:id', component: EditComponent },
  {path:'logout', component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
