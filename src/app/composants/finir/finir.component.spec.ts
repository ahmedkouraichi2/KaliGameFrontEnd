import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinirComponent } from './finir.component';

describe('FinirComponent', () => {
  let component: FinirComponent;
  let fixture: ComponentFixture<FinirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
