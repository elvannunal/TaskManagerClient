import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  
  constructor(private authUserService: AuthUserService) {}

  resetPassword(email: string){
    debugger
    this.authUserService.passwordReset(email).subscribe(
      (response: any) => {
        alert('Mail başarıyla gönderildi.');
      },
      error => {
        alert('Mail gönderme işlemi başarısız: ' + error);
      }
    );
  }

}
