import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

interface User{
  username: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isAuthenticated  = false;
  private currentUser: User | null = null;

  private users: User[] = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'jefe', password: 'jefe123', role: 'jefe' },
    { username: 'user1', password: 'user123', role: 'user' },
  ];

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      this.isAuthenticated = true;
      this.currentUser = user;

      // Redirigir según el rol

      if (user.role === 'admin'){
        this.router.navigate(['/admin'])
      }
      if (user.role === 'jefe'){
        this.router.navigate(['/jefe'])
      }
      if (user.role === 'user'){
        this.router.navigate(['/dashboard'])
      }
      //this.router.navigate([user.role === 'admin' ? '/admin' : '/dashboard']);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
