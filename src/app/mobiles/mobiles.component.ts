import { Component, OnInit, Input } from '@angular/core';
import {ShoppingCartService} from '../SERVICES/shopping-cart.service'
import{ ApiService} from '../SERVICES/api.service'

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  @Input() products: any [];
  items: any [];
  constructor(private shopping_cart: ShoppingCartService,private api: ApiService) { }

  ngOnInit(): void {
    this.getProductsm()
  }
  getProductsm(){
    this.api.getJsonm().subscribe(resp=>{
      this.items = resp
      console.log(resp.price)
    })
  }
  addToCart(p){
    this.shopping_cart.addProduct(p)
  }

}
