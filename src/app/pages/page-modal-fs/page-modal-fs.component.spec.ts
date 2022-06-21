import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModalFsComponent } from './page-modal-fs.component';

describe('PageModalFsComponent', () => {
  let component: PageModalFsComponent;
  let fixture: ComponentFixture<PageModalFsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModalFsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModalFsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
