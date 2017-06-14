import { Component, OnInit } from '@angular/core';
import { ProductsService, Fish } from '../products.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.scss']
})
export class FishListComponent implements OnInit {
  fish$: Observable<Fish[]>;
  constructor(products: ProductsService) {
    this.fish$ = products.fish$;
  }

  ngOnInit() {
  }

}
