
// src/app/modules/medecin/components/medecin-detail/medecin-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MedecinService } from '../../services/medecin.service';
import { Medecin } from '../../models/medecin.model';

@Component({
  selector: 'app-medecin-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="medecin">
      <h2>Détails du Médecin</h2>
      <p>Nom: {{ medecin.nom }}</p>
      <p>Prénom: {{ medecin.prenom }}</p>
      <p>Spécialité: {{ medecin.specialite }}</p>
      <p>Téléphone: {{ medecin.telephone }}</p>
      <p>Email: {{ medecin.email }}</p>
    </div>
  `
})
export class MedecinDetailComponent implements OnInit {
  medecin?: Medecin;

  constructor(
    private route: ActivatedRoute,
    private medecinService: MedecinService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.medecinService.getById(id).subscribe(
      medecin => this.medecin = medecin
    );
  }
}
