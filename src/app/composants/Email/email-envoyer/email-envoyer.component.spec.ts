import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailEnvoyerComponent } from './email-envoyer.component';

describe('EmailEnvoyerComponent', () => {
  let component: EmailEnvoyerComponent;
  let fixture: ComponentFixture<EmailEnvoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailEnvoyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailEnvoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
