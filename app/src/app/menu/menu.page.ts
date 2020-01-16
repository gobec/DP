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

  async getItem(item: any){
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getOneItem(item)
      .subscribe(res => {
        loading.dismiss();
        console.log(res[0].nameItem);
        return res[0].nameItem
      }, err => {
        console.log(err);
        loading.dismiss();
      });
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
        for (var i=0; i<this.menus.length; i++){
          this.menus[i].entreeName = this.getItem(this.menus[i].entree);
          console.log(this.menus[i].entreeName);
          this.menus[i].platName = this.getItem(this.menus[i].plat);
          console.log(this.menus[i].platName);
          this.menus[i].dessertName = this.getItem(this.menus[i].dessert);
          console.log(this.menus[i].dessertName);
        }
        console.log(this.menus);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  getTodayDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.currentDate = this.currentDate.toLocaleDateString('fr-FR', options)
  }
  
  ngOnInit() {
    this.getTodayDate();
    this.getTodayMenu();
  }
}
