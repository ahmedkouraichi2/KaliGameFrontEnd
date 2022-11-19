import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoInfoExamComponent } from './tuto-info-exam.component';

describe('TutoInfoExamComponent', () => {
  let component: TutoInfoExamComponent;
  let fixture: ComponentFixture<TutoInfoExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoInfoExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoInfoExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
