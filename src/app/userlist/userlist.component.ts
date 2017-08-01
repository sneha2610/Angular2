import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {AccordionModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent{
  usernames:any;
  data:any;
  address:any;
  company:any;
  clicked:boolean;
  constructor(private httpService:HttpService) {
    this.httpService.getUsers().subscribe(data=>{
      this.usernames=data;
    });
  }

}
