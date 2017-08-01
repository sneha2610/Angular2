import { Component } from '@angular/core';
import { MultiSelectModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { DataTableModule,SharedModule } from 'primeng/primeng';
import { PaginatorModule } from 'primeng/primeng';
import { DataListModule } from 'primeng/primeng';
import { GalleriaModule } from 'primeng/primeng';
import { Component1Component } from './component1/component1.component';
import {TestDataService} from './test-data.service';
import { CarServiceService} from './car-service.service';
import { Http,Response } from '@angular/Http';
import {ConstructionService} from './construction.service';
import {ConstructionComponent} from './construction/construction.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cars: SelectItem[];
  demoSelected:string[];
  images:any;
  serviceData:string;
  selectedCars:string[]=[];
  testData:any;
  file: any[] = [];
     constructor(private testService:TestDataService,private carService:CarServiceService) {

       this.serviceData=testService.getAll();
       this.cars=carService.getCars();

         this.demoSelected=[
           "Audi",
           "BMW",
           "Renault"
         ],

         this.testData=[
           {id:1,name:"Sneha",place:"Tsr",company:"bytekat"},
           {id:2,name:"Anoopi",place:"ktm",company:"bytekat"},
           {id:3,name:"Sujith",place:"klm",company:"bytekat"},
           {id:4,name:"Veena",place:"idk",company:"XYZ"},
           {id:5,name:"Anu",place:"Trissur",company:"LMN"},
           {id:6,name:"ABC 1",place:"XYZ1",company:"LMN1"},
           {id:7,name:"ABC 2",place:"XYZ2",company:"LMN2"},
           {id:8,name:"ABC 3",place:"XYZ3",company:"LMN3"},
           {id:9,name:"ABC 4",place:"XYZ4",company:"LMN4"},
           {id:10,name:"ABC 5",place:"XYZ5",company:"LMN5"},
           {id:11,name:"ABC 6",place:"XYZ6",company:"LMN6"},
           {id:12,name:"ABC7",place:"ktm",company:"bytekat"},
           {id:14,name:"SujithA",place:"klm",company:"bytekat"},
           {id:13,name:"WJEFNKJ",place:"mpm",company:"dfs"},
           {id:15,name:"Anisha",place:"wyd",company:"LMN"}
         ],

         this.selectedCars=this.demoSelected;
     }


   onUpload(event) {
       for(let file of event.files) {
           this.file.push(file);
       }

  }
}
