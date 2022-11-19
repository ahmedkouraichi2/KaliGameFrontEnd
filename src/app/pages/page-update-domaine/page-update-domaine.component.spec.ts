import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUpdateDomaineComponent } from './page-update-domaine.component';

describe('PageUpdateDomaineComponent', () => {
  let component: PageUpdateDomaineComponent;
  let fixture: ComponentFixture<PageUpdateDomaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUpdateDomaineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUpdateDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
