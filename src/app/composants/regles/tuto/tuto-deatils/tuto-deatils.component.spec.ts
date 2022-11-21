import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoDeatilsComponent } from './tuto-deatils.component';

describe('TutoDeatilsComponent', () => {
  let component: TutoDeatilsComponent;
  let fixture: ComponentFixture<TutoDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoDeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
