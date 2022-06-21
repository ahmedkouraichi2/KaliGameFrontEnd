import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableConnecorComponent } from './table-connecor.component';

describe('TableConnecorComponent', () => {
  let component: TableConnecorComponent;
  let fixture: ComponentFixture<TableConnecorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableConnecorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableConnecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
