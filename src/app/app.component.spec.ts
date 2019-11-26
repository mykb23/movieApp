import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MiniMovieAppComponent } from './mini-movie-app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MiniMovieAppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MiniMovieAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mini-movie-app'`, () => {
    const fixture = TestBed.createComponent(MiniMovieAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('mini-movie-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MiniMovieAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'mini-movie-app app is running!'
    );
  });
});
