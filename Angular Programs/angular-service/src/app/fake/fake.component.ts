import { Component, OnInit } from '@angular/core';
import { Fake } from '../fake.model';
import { FakeService } from '../fake.service';
@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {
  
  fakeArray:Array<Fake>=[];

  constructor(public fake:FakeService) { }    // FakeService DI 

  ngOnInit(): void {
  }

  fakeData() {
      this.fake.loadFakeJosnData().subscribe(result=>this.fakeArray=result,error=>console.log(error));
  }  
}
