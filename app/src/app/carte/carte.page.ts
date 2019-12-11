import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.page.html',
  styleUrls: ['./carte.page.scss'],
})
export class CartePage implements OnInit {

  plats: any;
  api: RestService;

  constructor(public restapi: RestService, public loadingController: LoadingController, public navController : NavController) {
    this.api = restapi;
    this.plats = [];
  }

  async getOneType(type: any, id: any){
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getOneType(type)
      .subscribe(res => {
        this.plats[id]=(res);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  ngOnInit() {
    this.getOneType("entree", 0);
    this.getOneType("dessert", 2);
  }
}
