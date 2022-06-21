import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModalUserUpdateComponent } from './page-modal-user-update.component';

describe('PageModalUserUpdateComponent', () => {
  let component: PageModalUserUpdateComponent;
  let fixture: ComponentFixture<PageModalUserUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModalUserUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModalUserUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
