import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageHomeComponent } from '../page-home/page-home.component';

describe('PageHomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PageHomeComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PageHomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'front-app-collecte-donnees'`, () => {
    const fixture = TestBed.createComponent(PageHomeComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('front-app-collecte-donnees');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PageHomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('front-app-collecte-donnees app is running!');
  });
});
