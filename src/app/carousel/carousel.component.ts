import { Component, OnInit } from '@angular/core';
import {GalleriaModule} from 'primeng/primeng';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent{
images:any;
  constructor() {
 this.images = [];
 this.images.push({source:'https://static.pexels.com/photos/20974/pexels-photo.jpg', alt:'Description for Image 1', title:'Title 1'});
 this.images.push({source:'https://phlow.github.io/feeling-responsive/images/gallery-example-5.jpg', alt:'Description for Image 2', title:'Title 2'});
 this.images.push({source:'http://www.stoplusjednicka.cz/sites/default/files/obrazky/2017/02/05_estonsko.jpg', alt:'Description for Image 3', title:'Title 3'});
 this.images.push({source:'http://thewalkingmonk.org/wp-content/plugins/full-page-full-width-backgroud-slider/images/slide6.jpg', alt:'Description for Image 4', title:'Title 4'});
 this.images.push({source:'http://www.planwallpaper.com/static/images/nature-wallpapers-1.jpg', alt:'Description for Image 5', title:'Title 5'});
 this.images.push({source:'http://www.jqueryscript.net/demo/Responsive-Full-Width-jQuery-Image-Slider-Plugin-skdslider/slides/6.jpg', alt:'Description for Image 6', title:'Title 6'});
 this.images.push({source:'http://files.all-free-download.com//downloadfiles/wallpapers/2560_1024/green_nature_dual_monitor_7677.jpg', alt:'Description for Image 7', title:'Title 7'});
 this.images.push({source:'http://widgets-musethemes.businesscatalyst.com/images/span4.jpg', alt:'Description for Image 8', title:'Title 8'});
 this.images.push({source:'http://stuffpoint.com/nature/image/258168-nature-beautiful-nature.jpg', alt:'Description for Image 9', title:'Title 9'});
 this.images.push({source:'http://belizenaturalenergy.bz/wp-content/uploads/2014/09/Fullwidth-PumpJack.jpg', alt:'Description for Image 10', title:'Title 10'});
}


}
