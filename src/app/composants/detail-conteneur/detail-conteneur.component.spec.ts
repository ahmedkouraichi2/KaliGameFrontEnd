import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailConteneurComponent } from './detail-conteneur.component';

describe('DetailConteneurComponent', () => {
  let component: DetailConteneurComponent;
  let fixture: ComponentFixture<DetailConteneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailConteneurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailConteneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
