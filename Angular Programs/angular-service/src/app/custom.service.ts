import { Injectable } from "@angular/core";

@Injectable()                       // angular service 
export class MyCustomService {

    display():string {
        return "Welcome to Service with DI";
    }
}