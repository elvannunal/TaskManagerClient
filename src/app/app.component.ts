import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/common/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthUserService } from './services/auth-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  deneme: boolean = false;
  isSelected: boolean = false;
  isResetPasswordSelected: boolean = false;

  constructor(public authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router, private authUserService: AuthUserService,) {
    authService.identityCheck();
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({

      next: params => {
        const userId: string = params["userId"];
        const resetToken: string = params["resetToken"];
        var deneme = this.authUserService.verifyResetToken(resetToken, userId);


      }
    });
  }

  toggleComponent(component: string) {

    this.isSelected = !this.isSelected;

    if (component === 'login') {
      this.router.navigate(['/login']);
    } else if (component === 'register') {
      this.router.navigate(['/register']);
    } else if (component === 'update-password') {
      this.router.navigate(['/update-password']);
    }
  }

  selectedResetPassword() {
    this.isResetPasswordSelected = !this.isResetPasswordSelected
  }

  selected() {
    this.isSelected = !this.isSelected;
  }
}
