import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.page.html',
  styleUrls: ['./carte.page.scss'],
})
export class CartePage implements OnInit {

  types : any;
  plats: any;
  api: RestService;
  
  constructor(public restapi: RestService, public loadingController: LoadingController, public navController : NavController) {
    this.api = restapi;
    this.plats = [];
    this.types = [];
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

  async getTypes(){
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getTypes()
      .subscribe(res => {
        this.types=res
        var indexed = [this.types.indexOf("entree")];
        if (indexed[0] >-1) {this.types.splice(indexed[0], 1)};
        indexed.push(this.types.indexOf("dessert"));
        if (indexed[1] >-1) {this.types.splice(indexed[1], 1)};   
        for (var i=0;i<this.types.length;i++){
          this.getOneType(this.types[i], i+2);
        }
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  ngOnInit() {
    this.getOneType("entree", 0);
    this.getTypes();
    this.getOneType("dessert", 1);
  }
}
