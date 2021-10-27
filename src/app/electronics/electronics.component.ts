import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../SERVICES/shopping-cart.service'
import{ ApiService} from '../SERVICES/api.service'

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  items: any [];
  constructor(private shopping_cart: ShoppingCartService,private api: ApiService) { }

  ngOnInit(): void {
    this.getProductse()
  }

  getProductse(){
    this.api.getJsone().subscribe(resp=>{
      this.items = resp
      console.log(resp.price)
    })
  }
  addToCart(p){
    this.shopping_cart.addProduct(p)
  }

}
