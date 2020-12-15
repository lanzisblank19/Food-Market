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
  constructor() { }

  ngOnInit(): void {
  }

}
