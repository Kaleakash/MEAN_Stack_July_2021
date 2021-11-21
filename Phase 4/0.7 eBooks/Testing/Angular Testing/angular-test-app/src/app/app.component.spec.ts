import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });           // configureTestModule method load the all component and compiled

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();     // app component created..
  });

  it(`should have as title 'angular-test-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);    //component created and get the id component 
    const app = fixture.componentInstance;            // this line we will get the instance of the component     
    expect(app.title).toEqual('angular-test-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();      // load the content in html page 
    const compiled = fixture.nativeElement as HTMLElement;    // we are getting the reference of dom 
   // expect(compiled.querySelector('.content span')?.textContent).toContain('angular-test-app app is running!');
   expect(compiled.querySelector('h1')?.textContent).toEqual('Welcome Angular Testing');
  });

  it("component property variable testing",()=> {
    let componentId = TestBed.createComponent(AppComponent);
    let componentRef = componentId.componentInstance;
    expect(componentRef.id).toEqual(100);
    expect(componentRef.name).toEqual("Rajesh");
    expect(componentRef.salary).toBeGreaterThan(10000);
    expect(componentRef.result).toBeTrue();
    expect(componentRef.msg).toContain("Angular")
    expect(componentRef.names.length).toBe(5)
    expect(componentRef.names.length).toBeGreaterThan(4);
    expect(componentRef.names[0]).toEqual("Raj");
  })

  it("component function testing ",() => {
    let componentId = TestBed.createComponent(AppComponent);
    let componentRef = componentId.componentInstance;
    expect(componentRef.sayHello()).toEqual("Welcome to Angular testing");
    expect(componentRef.sayHello()).toContain("testing");
    let result = componentRef.checkUser("Raj","123");
    expect(result).toBeTrue();
  })
});
