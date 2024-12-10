import { Routes, RouterModule } from '@angular/router';
import { MedecinListComponent } from './components/medecin-list/medecin-list.component';
import { MedecinDetailComponent } from './components/medecin-detail/medecin-detail.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/medecin-list/medecin-list.component').then(c => c.MedecinListComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./components/medecin-detail/medecin-detail.component').then(c => c.MedecinDetailComponent)
  }
];

export const MedecinRoutingModule = RouterModule.forChild(routes);
