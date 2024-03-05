import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from '../models/user';
import { Login } from '../models/login';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/common/auth.service';
import { AuthUserService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authUserService:AuthUserService,
    private router: Router,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }
  
  get controls() {
    return this.loginForm.controls;
  }
  onSubmit(loginData: Login) {
    if (this.loginForm.valid) {
      this.authUserService.login(loginData).subscribe(
        (response: any) => {
          alert('Login successful');
          console.log('User login successful:', response);
          this.authUserService.setToken(response);
          this.authService.identityCheck();
        },
        error => {
          alert('Login failed: ' + error);
          console.error('User login failed:', error);
        }
      );
    }
  }
}