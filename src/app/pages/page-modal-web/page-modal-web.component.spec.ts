import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModalWebComponent } from './page-modal-web.component';

describe('PageModalWebComponent', () => {
  let component: PageModalWebComponent;
  let fixture: ComponentFixture<PageModalWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModalWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModalWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
