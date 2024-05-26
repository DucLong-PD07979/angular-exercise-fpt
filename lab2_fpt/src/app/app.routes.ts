import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { ContactComponent } from '../components/contact/contact.component';
import { BillComponent } from '../components/bill/bill.component';
import canActivateTeam from './auth';
import { LoginComponent } from '../components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'home',
    title: 'Home',
    component: HomePageComponent,
  },
  {
    path: 'contact',
    title: 'contact',
    component: ContactComponent,
    canActivate: [canActivateTeam],
  },
  { path: 'bill', component: BillComponent, canActivate: [canActivateTeam] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
