// src/app/core/guards/role.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    const requiredRoles = route.data['roles'] as Array<string>;

    if (currentUser && requiredRoles.includes(currentUser.role)) {
      return true;
    }

    // Rediriger vers la page non autorisée
    this.router.navigate(['/unauthorized']);
    return false;
  }
}