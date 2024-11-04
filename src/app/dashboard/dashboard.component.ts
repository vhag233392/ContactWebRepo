// src/app/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {Sala} from '../sala';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private authService: AuthService) {}

  idSala: number | null = null;
  sala: Sala | null = null;
  errorMessage: string | null = null;

  onSalaEncontrada(sala: Sala | null): void {
    this.sala = sala;
    this.errorMessage = null; // Limpiar el mensaje de error
  }

  onError(message: string): void {
    this.errorMessage = message; // Establecer el mensaje de error
    this.sala = null; // Limpiar la sala
  }
  logout(): void {
    this.authService.logout();
  }
}

