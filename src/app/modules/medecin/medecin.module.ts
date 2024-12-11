// src/app/modules/medecin/medecin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MedecinListComponent } from './components/medecin-list/medecin-list.component';
import { MedecinDetailComponent } from './components/medecin-detail/medecin-detail.component';
import { MedecinService } from './services/medecin.service';

const routes: Routes = [
  { 
    path: '', 
    component: MedecinListComponent 
  },
  { 
    path: 'detail/:id', 
    component: MedecinDetailComponent 
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    MedecinDetailComponent,
    MedecinListComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [MedecinService]
})
export class MedecinModule { }