import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {



  constructor(private authUserService: AuthUserService, private activatedRoute: ActivatedRoute,private userService:UserService) { }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe({
      next: params => {
        const userId: string = params["userId"];
        const resetToken: string = params["resetToken"];
       this.authUserService.verifyResetToken(resetToken, userId); 
    
      }
    });
  }

  updatePassword(password:string, passwordConfirm:string){
    if(password != passwordConfirm){
      alert("Şifreleri doğrulayınız!")
    }
    this.activatedRoute.params.subscribe({
      next: params=>{
        debugger
        const userId : string = params["userId"];
        const resetToken : string = params["resetToken"];

        this.userService.passwordUpdate(userId,resetToken,password,passwordConfirm).subscribe(result=>{
          if(result.success){
            alert("Şifre başarıyla güncellenmiştir.")
          }else {
            console.error("Şifre güncelleme işlemi başarısız!");
          }
        });
      }
    })
  }

}
