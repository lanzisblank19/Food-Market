import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrating',
  templateUrl: './mostrating.component.html',
  styleUrls: ['./mostrating.component.scss']
})
export class MostratingComponent implements OnInit {
  myimage1:string = "assets/image/milktea.jpg";
  myimage2:string = "assets/image/food market1.png";
  myimage3:string = "assets/image/burgerfries1.jpg";
  myimage4:string = "assets/image/coffee.jpg";
  myimage5:string = "assets/image/cookies.jpg";
  myimage6:string = "assets/image/crinkles.jpg";
  myimage7:string = "assets/image/donut1.jpg";
  myimage8:string = "assets/image/cake1.jpg";
  myimage9:string = "assets/image/takoyaki1.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
