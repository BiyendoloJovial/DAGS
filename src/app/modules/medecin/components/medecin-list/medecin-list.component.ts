// src/app/modules/medecin/components/medecin-list/medecin-list.component.ts
import { Component, OnInit } from '@angular/core';
import { MedecinService } from '../../services/medecin.service';
import { Medecin } from '../../models/medecin.model';
import { RouterModule } from '@angular/router'; // Import nécessaire

@Component({
  selector: 'app-medecin-list',
  template: `
    <div class="medecin-list">
      <h2>Liste des Médecins</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Spécialité</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let medecin of medecins">
            <td>{{ medecin.nom }}</td>
            <td>{{ medecin.prenom }}</td>
            <td>{{ medecin.specialite }}</td>
            <td>
              <!-- <button [routerLink]="['/medecins/detail', medecin.idMedecin]">Détails</button> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class MedecinListComponent implements OnInit {
  medecins: Medecin[] = [];

  constructor(private medecinService: MedecinService) {}

  ngOnInit() {
    this.medecinService.getAll().subscribe(
      medecins => this.medecins = medecins,
      error => console.error('Erreur de chargement', error)
    );
  }
}