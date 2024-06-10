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
import { CreateProjectComponent } from './page/createProject/create-project.component';
import AuthGuard from './core/guards/authGuard';
import { ProjectDetailsComponent } from './page/project-details/project-details.component';
import { CreateTaskComponent } from './page/create-task/create-task.component';

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
    path: 'projects-of-you',
    title: 'projects-of-you',
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
  {
    path: 'create-project',
    title: 'Create project',
    component: CreateProjectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'projects-of-you/:slug',
    title: 'projects details',
    component: ProjectDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-task',
    title: 'create-task',
    component: CreateTaskComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
