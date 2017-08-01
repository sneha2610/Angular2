import { Injectable } from '@angular/core';
import { Http } from '@angular/Http';
import 'rxjs/add/operator/map';
@Injectable()
export class HttpService {
  users:any;
  User:any;
  constructor(private http:Http) {

  }

  getUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
    .map(response=>response.json());
  }

}
