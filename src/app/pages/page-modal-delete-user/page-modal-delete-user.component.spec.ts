import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModalDeleteUserComponent } from './page-modal-delete-user.component';

describe('PageModalDeleteUserComponent', () => {
  let component: PageModalDeleteUserComponent;
  let fixture: ComponentFixture<PageModalDeleteUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModalDeleteUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModalDeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
