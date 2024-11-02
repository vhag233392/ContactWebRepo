// src/app/admin/admin.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}

