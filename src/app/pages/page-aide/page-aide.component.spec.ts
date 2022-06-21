import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAideComponent } from './page-aide.component';

describe('PageAideComponent', () => {
  let component: PageAideComponent;
  let fixture: ComponentFixture<PageAideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
