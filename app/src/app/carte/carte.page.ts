import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.page.html',
  styleUrls: ['./carte.page.scss'],
})
export class CartePage implements OnInit {

  entree: any;
  api: RestService;
  dessert: any;

  constructor(public restapi: RestService, public loadingController: LoadingController, public navController : NavController) {
    this.api = restapi;
   }

   async getOneType(type: any){
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getOneType(type)
      .subscribe(res => {
        this.entree = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  ngOnInit() {
    this.getOneType("entree");
  }
}
