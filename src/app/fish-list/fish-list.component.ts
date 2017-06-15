import { Component, OnInit } from '@angular/core';
import { ProductsService, Fish } from '../products.service';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.scss']
})
export class FishListComponent implements OnInit {
  fish$: Observable<Fish[]>;
  constructor(private store: Store<any>) {
    this.fish$ = store.select('fish');
    this.store.dispatch({
      type: 'FISH_FETCH'
    });
  }

  ngOnInit() {
  }

}
