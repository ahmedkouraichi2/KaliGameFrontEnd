import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddDomaineComponent } from './page-add-domaine.component';

describe('PageAddDomaineComponent', () => {
  let component: PageAddDomaineComponent;
  let fixture: ComponentFixture<PageAddDomaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddDomaineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
