import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-checkout-subtotal',
  templateUrl: './checkout-subtotal.component.html',
  styleUrls: ['./checkout-subtotal.component.css']
})
export class CheckoutSubtotalComponent implements OnInit {
  @Input() checkout_products: any [];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()

  constructor(public shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
    console.log('products2', this.checkout_products)
  }
  submit(){
    console.log('products2 ', this.checkout_products)
  }

}
