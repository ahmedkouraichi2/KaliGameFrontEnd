import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeleteQuestionComponent } from './page-delete-question.component';

describe('PageDeleteQuestionComponent', () => {
  let component: PageDeleteQuestionComponent;
  let fixture: ComponentFixture<PageDeleteQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDeleteQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDeleteQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
