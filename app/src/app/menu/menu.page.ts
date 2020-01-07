import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  currentDate : any;
  
  constructor() { 
    this.currentDate= new Date();
  }

  getTodayDate()
  {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.currentDate = this.currentDate.toLocaleDateString('fr-FR', options)
    console.log(this.currentDate);
  }
  
  ngOnInit() {
    this.getTodayDate()

  }


}
