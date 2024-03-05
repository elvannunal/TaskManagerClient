import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from 'src/app/services/user.service';
import { Create_User } from '../contracts/user/create_user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router) {
    
  }
  ngOnInit(): void {

    this.registerForm=this.formBuilder.group({
      nameSurname:['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      userName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
    })
  }

  get component(){
    return this.registerForm.controls
  }
  
  onSubmit(userData:User) {
 
    if (this.registerForm.valid) {
     this.userService.createUser(userData).subscribe(
        response => {
          alert(response)

          console.log('User registration successful:', response);
        },
        error => {
          alert(error)
          console.error('User registration failed:', error);
        }
      );
    }
  }
}
