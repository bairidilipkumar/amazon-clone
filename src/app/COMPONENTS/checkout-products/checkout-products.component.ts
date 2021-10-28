import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {
  @Input() checkout_products: any [];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()

  constructor(public shopping_cart_service: ShoppingCartService,private http:HttpClient) { }

  ngOnInit(): void {
    console.log('products ', this.checkout_products)
  }

  removeItem(p){
    this.shopping_cart_service.removerItem(p)
    this.deleteEvent.emit(p)
  }
  onSubmit(){
    console.log("jkasbhd")
    console.log('products ', this.checkout_products)
    this.http.post('https://61795117aa7f34001740499e.mockapi.io/api/v1/orders', this.checkout_products).subscribe((result)=>{
      console.warn("result",result)
    })
  }

}
