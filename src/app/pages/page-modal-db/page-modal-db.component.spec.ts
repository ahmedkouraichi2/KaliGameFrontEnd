import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModalDbComponent } from './page-modal-db.component';

describe('PageModalDbComponent', () => {
  let component: PageModalDbComponent;
  let fixture: ComponentFixture<PageModalDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModalDbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModalDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
