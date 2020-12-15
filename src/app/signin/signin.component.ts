import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  myimage1:string = "assets/image/food logo2.jpg";
  myimage2:string = "assets/image/food market1.png";

  constructor() { }

  ngOnInit(): void {
  }

}
