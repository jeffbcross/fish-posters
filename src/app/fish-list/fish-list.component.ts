import { Component, OnInit } from '@angular/core';
import { ProductsService, Fish } from '../products.service';

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.scss']
})
export class FishListComponent implements OnInit {
  fish: Fish[];
  constructor(products: ProductsService) {
    this.fish = products.fish;
  }

  ngOnInit() {
  }

}
