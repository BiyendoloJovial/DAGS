// src/app/app.component.ts
import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { SharedModule } from "./shared/shared.module";

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <app-header *ngIf="authService.currentUserValue"></app-header>
      <main>
        <router-outlet></router-outlet>
      </main>
      <app-footer *ngIf="authService.currentUserValue"></app-footer>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    main {
      flex-grow: 1;
    }
  `],
  imports: [SharedModule]
})
export class AppComponent {
  title = 'followUpF'; // Propriété ajoutée pour satisfaire les tests
  constructor(public authService: AuthService) {}
}