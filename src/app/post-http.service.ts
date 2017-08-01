import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/Http';
import 'rxjs/add/operator/map';


@Injectable()
export class PostHttpService {

  constructor(private http:Http) { }

  postRequest(){
    var json = JSON.stringify({"UserId": 1,
                               "id": 20,
                               "title": "either to reject ",
                               "body": "Because he takesnreprehenderit"
                             });
    var params = json;
    var headers=new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');

    return this.http.post('http://jsonplaceholder.typicode.com/posts',params,
    {
      headers:headers
    }).map(res=>res.json());
  }

}
