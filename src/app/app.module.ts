import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MultiSelectModule } from 'primeng/primeng';
import { DataTableModule,SharedModule } from 'primeng/primeng';
import { PaginatorModule } from 'primeng/primeng';
import { DataListModule } from 'primeng/primeng';
import { GalleriaModule } from 'primeng/primeng';
import { TestDataService } from './test-data.service';
import { Component1Component } from './component1/component1.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarServiceService} from './car-service.service';
import { HttpModule } from '@angular/Http';
import { HttpService } from './http.service';
import { UserlistComponent } from './userlist/userlist.component';
import {AccordionModule} from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { FileUploadModule } from 'primeng/primeng';
import { VideoComponent } from './video/video.component';
import { PostHttpService } from './post-http.service';
import { LightboxModule } from 'primeng/primeng';
import { ConstructionComponent } from './construction/construction.component';
import {ConstructionService} from './construction.service';
import { InputComponent } from './input/input.component';
import { MdfComponentComponent } from './mdf-component/mdf-component.component';
@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    CarouselComponent,
    UserlistComponent,
    VideoComponent,
    ConstructionComponent,
    InputComponent,
    MdfComponentComponent
  ],
  imports: [
    BrowserModule,
    MultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    SharedModule,
    PaginatorModule,
    DataListModule,
    GalleriaModule,
    HttpModule,
    AccordionModule,
    BrowserAnimationsModule,
    PanelModule,
    FileUploadModule,
    LightboxModule
  ],
  providers:[TestDataService,CarServiceService,HttpService,PostHttpService,ConstructionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
