// src/app/shared/components/sidebar/sidebar.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <aside class="sidebar">
      <nav>
        <ul>
          <li><a routerLink="/dashboard">Dashboard</a></li>
          <li><a routerLink="/patients">Patients</a></li>
          <li><a routerLink="/appointments">Rendez-vous</a></li>
          <li><a routerLink="/reports">Rapports</a></li>
        </ul>
      </nav>
    </aside>
  `,
  styles: [`
    .sidebar {
      width: 250px;
      background: #f4f4f4;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      padding: 20px;
      box-shadow: 2px 0 5px rgba(0,0,0,0.1);
    }
    .sidebar ul {
      list-style: none;
      padding: 0;
    }
    .sidebar ul li {
      margin: 15px 0;
    }
    .sidebar ul li a {
      text-decoration: none;
      color: #333;
    }
    .sidebar ul li a:hover {
      color: #007bff;
    }
  `]
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
