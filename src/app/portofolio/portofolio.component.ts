import { Component } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent {
  imgArr: string[] = [
    "assets/poert1.png", "assets/port2.png", "assets/port3.png",
    
"assets/poert1.png", "assets/port2.png", "assets/port3.png",

  ]
  
  imgSrc: string = '';
  imgIndexAlt: string = '';

  showModel(src: string, index: number) {
    this.imgSrc = src
  
   
    console.log(this.imgSrc);
    
  }
  




}
