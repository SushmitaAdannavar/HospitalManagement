import { ComponentFixture, async,TestBed } from '@angular/core/testing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let de:DebugElement;
  let el:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],imports:[BrowserModule,FormsModule,ReactiveFormsModule]
    }).compileComponents().then(()=>{
      fixture = TestBed.createComponent(SignupComponent);
      component = fixture.componentInstance;
      de=fixture.debugElement.query(By.css('form'));
      el=de.nativeElement;
      fixture.detectChanges();
    });
    
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set submitted to true',async( () => {
    component.register();
    expect(component.submitted).toBeTruthy();
  }));
});
