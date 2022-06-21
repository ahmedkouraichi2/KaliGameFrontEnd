import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModalDeleteComponent } from './page-modal-delete.component';

describe('PageModalDeleteComponent', () => {
  let component: PageModalDeleteComponent;
  let fixture: ComponentFixture<PageModalDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModalDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
