// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    if (!this.authService.login(this.username, this.password)) {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
