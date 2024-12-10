// src/app/shared/components/header/header.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header>
      <nav>
        <div class="logo">FollowUp</div>
        <ul *ngIf="isLoggedIn">
          <li><a routerLink="/dashboard">Dashboard</a></li>
          <li><a routerLink="/patients">Patients</a></li>
          <li (click)="logout()">Déconnexion</li>
        </ul>
      </nav>
    </header>
  `
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.isLoggedIn = !!user;
    });
  }

  logout() {
    this.authService.logout();
  }
}