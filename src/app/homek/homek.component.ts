import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../SERVICES/shopping-cart.service'
import{ ApiService} from '../SERVICES/api.service'

@Component({
  selector: 'app-homek',
  templateUrl: './homek.component.html',
  styleUrls: ['./homek.component.css']
})
export class HomekComponent implements OnInit {

  items: any [];
  constructor(private shopping_cart: ShoppingCartService,private api: ApiService) { }

  ngOnInit(): void {
    this.getProductsh()
  }
  getProductsh(){
    this.api.getJsonh().subscribe(resp=>{
      this.items = resp
      console.log(resp.price)
    })
  }
  addToCart(p){
    alert("your product is added to cart")
    this.shopping_cart.addProduct(p)
  }

}
