import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUtlilisateurComponent } from './page-utlilisateur.component';

describe('PageUtlilisateurComponent', () => {
  let component: PageUtlilisateurComponent;
  let fixture: ComponentFixture<PageUtlilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUtlilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUtlilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
