import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  myimage2:string = "assets/image/food market1.png";

  constructor() { }

  ngOnInit(): void {
  }

}
