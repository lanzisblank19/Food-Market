import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  myimage1:string = "assets/image/milktea.jpg";
  myimage2:string = "assets/image/food market1.png";
  myimage3:string = "assets/image/burgerfries1.jpg";
  myimage4:string = "assets/image/coffee.jpg";
  myimage5:string = "assets/image/cookies.jpg";
  myimage6:string = "assets/image/crinkles.jpg";
  myimage7:string = "assets/image/donut1.jpg";
  myimage8:string = "assets/image/cake1.jpg";
  myimage9:string = "assets/image/takoyaki1.jpg";
  myimage10:string = "assets/image/wood.jpg";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  singin() {
    this.router.navigate(['/signin']);
  }

}
