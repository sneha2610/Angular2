import { Injectable } from '@angular/core';

@Injectable()
export class TestDataService {
  constructor() { }
  getAll(){
      return "Hello from service";
  }
}
