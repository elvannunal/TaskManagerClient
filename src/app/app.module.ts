import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { MembersComponent } from './components/members/members.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from "@angular/material/toolbar";
import { TeamComponent } from './components/team/team.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DxButtonModule, DxTextBoxModule } from 'devextreme-angular';
import { TeamsModalComponent } from './components/teams-modal/teams-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SidebarComponent,
    TasksComponent,
    MembersComponent,
    TeamComponent,
    RegisterComponent,
    ResetPasswordComponent,
    TeamsModalComponent,
    UpdatePasswordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserTransferStateModule,
    DxTextBoxModule,
    DxButtonModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonModule,
    NgbModalModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem("accessToken"),
        allowedDomains: ["localhost:5122"]
      }
    })

  ],
  providers: [NgbActiveModal],

  bootstrap: [AppComponent]
})
export class AppModule { }
