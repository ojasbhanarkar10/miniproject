import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login$!: Observable<any>;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) { }

  login(): void {
    this.login$ = this.authService
      .login()
      .pipe(
        tap(() => this.router.navigateByUrl('/profile'))
      )
  }

}
