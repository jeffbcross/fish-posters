import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  fish: Fish[] = [{
    id: 0,
    name: 'squid',
    pic: '/assets/squid-full.jpg'
  }, {
    id: 1,
    name: 'halibut',
    pic: '/assets/halibut-full.jpg'
  }];
}

export interface Fish {
  id: number;
  name: string;
  pic: string;
}
