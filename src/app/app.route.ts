import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersComponent } from './components/users/users.component';
import { GuestsComponent } from './components/guests/guests.component';
import { AttendeesComponent } from './components/attendees/attendees.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const appRoute: Routes = [
  { path: '',  component: LoginComponent, pathMatch: 'full' },
  { path: 'landing',  component: LandingComponent, pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent, pathMatch: 'full' },
  { path: 'users',  component: UsersComponent, pathMatch: 'full' },
  { path: 'users/add',  component: AddUserComponent, pathMatch: 'full' },
  { path: 'guests',  component: GuestsComponent, pathMatch: 'full' },
  { path: 'attendees',  component: AttendeesComponent, pathMatch: 'full' }/*,
  { path: '**', component: PageNotFoundComponent } */
];


export const routing = RouterModule.forRoot(appRoute);