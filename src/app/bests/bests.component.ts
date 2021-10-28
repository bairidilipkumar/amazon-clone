import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../SERVICES/shopping-cart.service'
import{ ApiService} from '../SERVICES/api.service'

@Component({
  selector: 'app-bests',
  templateUrl: './bests.component.html',
  styleUrls: ['./bests.component.css']
})
export class BestsComponent implements OnInit {
  items: any [];
  constructor(private shopping_cart: ShoppingCartService,private api: ApiService) { }

  ngOnInit(): void {
    this.getProductst()
  }
  getProductst(){
    this.api.getJsont().subscribe(resp=>{
      this.items = resp
      console.log(resp.price)
    })
  }
  addToCart(p){
    this.shopping_cart.addProduct(p)
  }

}
