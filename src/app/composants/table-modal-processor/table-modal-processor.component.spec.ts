import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableModalProcessorComponent } from './table-modal-processor.component';

describe('TableModalProcessorComponent', () => {
  let component: TableModalProcessorComponent;
  let fixture: ComponentFixture<TableModalProcessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableModalProcessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableModalProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
