import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  currentDate : any;
  menus: any;
  api: RestService;
  
  constructor(public restapi: RestService, public loadingController: LoadingController, public navController : NavController) { 
    this.currentDate= new Date();
    this.menus = [];
    this.api = restapi;
  }

  async getTodayMenu(){
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getTodayMenu()
      .subscribe(res => {
        this.menus=res;
        console.log("michel");
        console.log(this.menus);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  getTodayDate()
  {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.currentDate = this.currentDate.toLocaleDateString('fr-FR', options)
    console.log(this.currentDate);
  }
  
  ngOnInit() {
    this.getTodayDate();
    this.getTodayMenu();
  }


}
