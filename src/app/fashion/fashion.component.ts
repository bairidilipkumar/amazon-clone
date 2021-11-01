import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../SERVICES/shopping-cart.service'
import{ ApiService} from '../SERVICES/api.service'

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
  items: any [];

  constructor(private shopping_cart: ShoppingCartService,private api: ApiService) { }

  ngOnInit(): void {
    this.getProductsf()
  }
  getProductsf(){
    this.api.getJsonf().subscribe(resp=>{
      this.items = resp
      console.log(resp.price)
    })
  }
  addToCart(p){
    alert("your product is added to cart")
    this.shopping_cart.addProduct(p)
  }

}
