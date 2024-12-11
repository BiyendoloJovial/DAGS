
// src/app/core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(
    private http: HttpClient, 
    private storageService: StorageService
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(
      this.storageService.getItem('currentUser')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/login`, { username, password })
      .pipe(map(user => {
        // Stocker les détails de l'utilisateur et le token JWT
        this.storageService.setItem('currentUser', user);
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // Supprimer l'utilisateur du stockage local
    this.storageService.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}