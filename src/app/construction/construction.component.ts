import { Component, OnInit } from '@angular/core';
import {ConstructionService} from '../construction.service';
import {AccordionModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css']
})
export class ConstructionComponent implements OnInit {
  construction:any;
  cons:any;
  constructor(private constructionService:ConstructionService) {
    this.constructionService.getConstructionData().subscribe(data=>{
      this.construction=data.category;
    });
   }
  ngOnInit() {
  }

}
