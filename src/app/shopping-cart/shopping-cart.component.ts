import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Fish } from 'app/products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products$: Observable<Fish[]> = Observable.of([]);
  constructor() { }

  ngOnInit() {
  }

}
