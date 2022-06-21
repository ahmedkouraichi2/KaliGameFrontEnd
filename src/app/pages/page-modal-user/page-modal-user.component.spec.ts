import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModalUserComponent } from './page-modal-user.component';

describe('PageModalUserComponent', () => {
  let component: PageModalUserComponent;
  let fixture: ComponentFixture<PageModalUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModalUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
