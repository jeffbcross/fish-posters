import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Fish, ProductsService } from 'app/products.service';
import { CartState } from './reducer';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products$: Observable<Fish[]>;
  constructor(private store: Store<CartState>, private products: ProductsService) {
  }

  ngOnInit() {
    this.products$ = this.store
      .select((cartState: CartState) => cartState.selectedProducts)
      .switchMap(selectedProducts => this.products.fish$
        .map(fish => fish.filter(f => selectedProducts[f.id])));
  }

}
