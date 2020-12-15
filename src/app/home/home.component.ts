import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myimage1:string = "assets/image/meal.jpg";
  myimage2:string = "assets/image/food market1.png";
  myimage3:string = "assets/image/beverage.jpg";
  myimage4:string = "assets/image/dessert.jpg";
  myimage5:string = "assets/image/snacks.jpg";
  myimage6:string = "assets/image/crinkles.jpg";
  myimage7:string = "assets/image/donut1.jpg";
  myimage8:string = "assets/image/cake1.jpg";
  myimage9:string = "assets/image/takoyaki1.jpg";

  constructor() { }
  ngOnInit(): void {
  }

}
