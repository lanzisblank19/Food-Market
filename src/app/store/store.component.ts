import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  myimage1:string = "assets/image/storelogo.png";
  myimage2:string = "assets/image/sampleslide.jpg";
  myimage3:string = "assets/image/menu.jpg";
  myimage4:string = "assets/image/burgerfries.jpg";
  myimage5:string = "assets/image/fb.png";
  myimage6:string = "assets/image/ig.png";
  myimage7:string = "assets/image/twitter.png";
  constructor() { }

  ngOnInit(): void {
  }

}
