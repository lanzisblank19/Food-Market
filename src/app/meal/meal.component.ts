import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  myimage1:string = "assets/image/Store.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
