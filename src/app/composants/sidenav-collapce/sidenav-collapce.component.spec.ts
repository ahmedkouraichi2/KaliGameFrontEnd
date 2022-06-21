import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavCollapceComponent } from './sidenav-collapce.component';

describe('SidenavCollapceComponent', () => {
  let component: SidenavCollapceComponent;
  let fixture: ComponentFixture<SidenavCollapceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavCollapceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavCollapceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
