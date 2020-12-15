import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isShow: boolean = false
  title = 'FoodMarket'
  currentRoute: string = ""

  constructor(private router: Router) {
    this.router.events.subscribe(data => {
      console.log(data)
    })
    console.log()
    // if(url.url == "view"){
    //   this.isShow = false
    // }else{
    //   this.isShow =true
    // }
    // console.log(router.url);  // to print only path eg:"/login"

  }
}
