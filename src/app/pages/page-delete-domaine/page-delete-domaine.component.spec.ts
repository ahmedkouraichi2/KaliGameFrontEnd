import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeleteDomaineComponent } from './page-delete-domaine.component';

describe('PageDeleteDomaineComponent', () => {
  let component: PageDeleteDomaineComponent;
  let fixture: ComponentFixture<PageDeleteDomaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDeleteDomaineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDeleteDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
