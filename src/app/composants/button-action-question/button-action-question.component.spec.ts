import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonActionQuestionComponent } from './button-action-question.component';

describe('ButtonActionQuestionComponent', () => {
  let component: ButtonActionQuestionComponent;
  let fixture: ComponentFixture<ButtonActionQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonActionQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonActionQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
