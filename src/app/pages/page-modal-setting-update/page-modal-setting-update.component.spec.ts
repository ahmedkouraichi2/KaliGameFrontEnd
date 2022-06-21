import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModalSettingUpdateComponent } from './page-modal-setting-update.component';

describe('PageModalSettingUpdateComponent', () => {
  let component: PageModalSettingUpdateComponent;
  let fixture: ComponentFixture<PageModalSettingUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModalSettingUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModalSettingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
