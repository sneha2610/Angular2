import { Component, OnInit } from '@angular/core';
import {LightboxModule} from 'primeng/primeng';
import {PostHttpService} from '../post-http.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent{
  data:any;
  constructor(private postService:PostHttpService) {
    this.postService.postRequest().subscribe(
      data=>{
        this.data=data;
      });
   }


}
