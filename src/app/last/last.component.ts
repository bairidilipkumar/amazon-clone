import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.css']
})
export class LastComponent implements OnInit {

  constructor(public shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
  }

}
