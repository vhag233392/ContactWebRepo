import { Component } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-jefe',
  templateUrl: './jefe.component.html',
  styleUrl: './jefe.component.css'
})
export class JefeComponent {

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
