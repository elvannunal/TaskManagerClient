import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { MembersComponent } from './components/members/members.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TeamComponent } from './components/team/team.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/common/auth.guard';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';


const routes: Routes = [
    { path: "", component: LoginComponent },

    { path: "header", component: HeaderComponent ,canActivate:[AuthGuard]},
    { path: "sidebar", component: SidebarComponent,canActivate:[AuthGuard]},
    { path: "login", component: LoginComponent },
    { path: "members", component: MembersComponent,canActivate:[AuthGuard]},
    { path: "tasks", component: TasksComponent ,canActivate:[AuthGuard]},
    { path: "team", component: TeamComponent,canActivate:[AuthGuard]},
    { path: "register", component: RegisterComponent },
    { path: "resetPassword", component: ResetPasswordComponent },
    { path: "update-password/:userId/:resetToken", component: UpdatePasswordComponent}
   
]

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule, CommonModule]
  
})
export class AppRoutingModule { }
