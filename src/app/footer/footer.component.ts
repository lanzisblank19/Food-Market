import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  myimage1:string = "assets/image/food market1.png";
  myimage2:string = "assets/image/fb.png";
  myimage3:string = "assets/image/ig.png";
  myimage4:string = "assets/image/twitter.png";
  constructor() { }

  ngOnInit(): void {
  }

}
