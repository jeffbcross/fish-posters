import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {
  fish$: Observable<Fish[]>;
  constructor(private http: Http) {
    this.fish$ = http.get('/assets/fish.json')
      .map(res => res.json());
  }
}

export interface Fish {
  id: number;
  name: string;
  pic: string;
}
