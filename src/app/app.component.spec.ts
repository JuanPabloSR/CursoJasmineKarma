import { DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Probando NgModel', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const componente = fixture.componentInstance;
    const htmlElemento: DebugElement = fixture.debugElement.query(By.css('h2'));
    componente.title = 'Casa Sofka';
    fixture.detectChanges();
    expect(htmlElemento.nativeElement.innerHTML).toBe('Casa Sofka');
    componente.title = 'estoy en casa';
    fixture.detectChanges();
    expect(htmlElemento.nativeElement.innerHTML).toBe('estoy en casa');

  })

  // it(`should have as title 'base-test'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('base-test');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('base-test app is running!');
  // });
});
