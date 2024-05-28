import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboar/dashboard.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { PageNotFoundComponent } from './page/pageNotFound/page-not-found.component';
import { ProjectComponent } from './page/project/project.component';
import { UsersComponent } from './page/users/users.component';
import { EmailComponent } from './page/email/email.component';
import AuthGuard from './core/guards/authGuard';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'register',
    title: 'Register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'projects',
    title: 'Projects',
    component: ProjectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    title: 'Users',
    component: UsersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'email',
    title: 'Email',
    component: EmailComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
