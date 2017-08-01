import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/Http';
import {DataTableModule} from 'primeng/primeng';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})

export class Component1Component implements OnInit {
  data:any;
  users:any;
  constructor(private httpService:HttpService) {
    this.data=[
      {id:1,name:"ddsjewnw",desc:"ekjnwjnwnenw",author:"dkwencwe",price:"134"},
      {id:2,name:"rhrhtewf",desc:"wefwfnw",author:"dkwencwe",price:"433"},
      {id:3,name:"h6htve",desc:"ekjnwjnwnenw",author:"dkwencwe",price:"334"},
      {id:4,name:"sdfrg",desc:"vfgewnenw",author:"rgrrwe",price:"194"},
      {id:5,name:"ddsjwer",desc:"ekjnwjnwnenw",author:"dkwencwe",price:"234"},
      {id:6,name:"dweewnw",desc:"ektgnenw",author:"dkwencwe",price:"834"},
    ];
   }
  ngOnInit() {
    this.users=this.httpService.getUsers().subscribe(data=>{
      this.users=data;
    });
  }

}
