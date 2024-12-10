import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { SidebarComponent } from "../../shared/components/sidebar/sidebar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-admin-layout',
  template: `
    <div class="admin-layout">
      <app-sidebar></app-sidebar>
      <div class="main-content">
        <app-header></app-header>
        <router-outlet></router-outlet>
        <app-footer></app-footer>
      </div>
    </div>
  `,
  styleUrls: ['./admin-layout.component.scss'],
  imports: [HeaderComponent, SidebarComponent, FooterComponent]
})
export class AdminLayoutComponent {}