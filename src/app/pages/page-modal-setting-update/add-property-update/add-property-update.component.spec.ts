import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropertyUpdateComponent } from './add-property-update.component';

describe('AddPropertyUpdateComponent', () => {
  let component: AddPropertyUpdateComponent;
  let fixture: ComponentFixture<AddPropertyUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPropertyUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPropertyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
