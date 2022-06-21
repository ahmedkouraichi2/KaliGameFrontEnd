import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProcesseurComponent } from './page-processeur.component';

describe('PageProcesseurComponent', () => {
  let component: PageProcesseurComponent;
  let fixture: ComponentFixture<PageProcesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProcesseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProcesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
