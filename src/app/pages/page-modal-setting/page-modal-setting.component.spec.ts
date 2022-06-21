import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModalSettingComponent } from './page-modal-setting.component';

describe('PageModalSettingComponent', () => {
  let component: PageModalSettingComponent;
  let fixture: ComponentFixture<PageModalSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModalSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModalSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
