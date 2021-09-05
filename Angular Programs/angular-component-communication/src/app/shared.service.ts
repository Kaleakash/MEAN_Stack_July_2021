import { Injectable } from '@angular/core';

// singleton design pattern implement 
// while creating the object using @Injectalbe
// decorator 
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  arrayInfo:Array<number>=[];
  
  constructor() { }

  setArrayInfo(arrayInfo:Array<number>): void {
    this.arrayInfo=arrayInfo;
  }

  getArrayInfo() : Array<number>{
    return this.arrayInfo;
  }
  
}
