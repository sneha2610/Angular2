import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/Http';
import 'rxjs/add/operator/map';
@Injectable()
export class ConstructionService {
construction_data:any;
  constructor(private http:Http) {

   }

   getConstructionData(){
    return this.http.get("/api/search.php?pro_cat").map(response=>response.json());
  }


}
