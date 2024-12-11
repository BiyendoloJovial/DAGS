import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuthService } from './core/services/auth.service';

describe('AppComponent', () => {
  let mockAuthService: Partial<AuthService>;

  beforeEach(async () => {
    mockAuthService = {
      currentUserValue: null, // Valeur par défaut pour simuler l'absence d'utilisateur connecté
    };

    await TestBed.configureTestingModule({
      declarations: [AppComponent], // Utiliser `declarations` pour les composants
      providers: [
        { provide: AuthService, useValue: mockAuthService }, // Fournir un mock d'AuthService
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'followUpF' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('followUpF');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, followUpF');
  });

  // Test supplémentaire : Vérifier que app-header est affiché si un utilisateur est connecté
  it('should render app-header when user is logged in', () => {
    mockAuthService.currentUserValue = { name: 'Test User' }; // Simuler un utilisateur connecté
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
  });

  // Test supplémentaire : Vérifier que app-footer n'est pas affiché si aucun utilisateur n'est connecté
  it('should not render app-footer when user is not logged in', () => {
    mockAuthService.currentUserValue = null; // Simuler aucun utilisateur connecté
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-footer')).toBeFalsy();
  });
});
