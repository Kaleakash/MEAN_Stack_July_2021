import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';


import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;     // created the reference of service. 
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });// if we are using this spect through component
    service = TestBed.inject(EmployeeService);  // pull service class object using inject. 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("simple servie function testing ",()=> {
      let result = service.sayHello("Raj");
      expect(result).toContain("Raj");    
  })

  it("Fake Service Employee Details",(done)=> {

  
        setTimeout(
            ()=> {
              service.loadEmployeeInfo().subscribe(result=> {
                //console.log(result);
                expect(result.status).toEqual("success");
                expect(result.data.length).toEqual(24);
                done();
              })
            },2000
        )
        
  })

});
