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
        console.log(this.menus);
        this.menus[0].entreeName = this.getItem(this.menus[0].entree);
        this.menus[0].platName = this.getItem(this.menus[0].plat);
        this.menus[0].dessertName = this.getItem(this.menus[0].dessert);
        console.log(this.menus);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  async getItem(item: any){
    console.log(1);
    this.api.getOneItem(item)
      .subscribe(res => {
        console.log(res);
        return res.nameItem
      }, err => {
        console.log(err);
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
