import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuestionQuizComponent } from './page-question-quiz.component';

describe('PageQuestionQuizComponent', () => {
  let component: PageQuestionQuizComponent;
  let fixture: ComponentFixture<PageQuestionQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageQuestionQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQuestionQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
