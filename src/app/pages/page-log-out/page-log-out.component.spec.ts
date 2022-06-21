import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLogOutComponent } from './page-log-out.component';

describe('PageLogOutComponent', () => {
  let component: PageLogOutComponent;
  let fixture: ComponentFixture<PageLogOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLogOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLogOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
