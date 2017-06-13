import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService, Fish } from 'app/products.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-fish-detail',
  templateUrl: './fish-detail.component.html',
  styleUrls: ['./fish-detail.component.scss']
})
export class FishDetailComponent implements OnInit {
  product$: Observable<Fish>;
  constructor(private route: ActivatedRoute, private products: ProductsService) { }

  ngOnInit() {
    this.product$ = this.route.paramMap
      .map(paramMap => parseInt(paramMap.get('id'), 10))
      .map(id => this.products.fish
          .filter(fish => fish.id === id)[0]);
  }
}
