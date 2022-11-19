import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddQuestionComponent } from './page-add-question.component';

describe('PageAddQuestionComponent', () => {
  let component: PageAddQuestionComponent;
  let fixture: ComponentFixture<PageAddQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
