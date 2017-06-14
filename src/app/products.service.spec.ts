import { TestBed, inject } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { Response, BaseResponseOptions, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('ProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsService,
        {
          provide: Http,
          useValue: {
            get: jasmine.createSpy('http.get').and.returnValue(Observable.of(makeJsonResponse([{
              id: 101,
              name: 'squid-product',
              pic: '/assets/squid-full.jpg'
            }, {
              id: 102,
              name: 'halibut-product',
              pic: '/assets/halibut-full.jpg'
            }])))
          }
        }
      ]
    });
  });

  it('should be created', inject([ProductsService], (service: ProductsService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a list of fish', (done) => {
    inject([ProductsService], (service: ProductsService) => {
      service.fish$.subscribe(fish => {
        expect(Array.isArray(fish)).toBe(true);
        expect(Object.keys(fish[0]).sort()).toEqual(['id', 'name', 'pic']);
        expect(fish[0].name).toBe('squid-product');
        done();
      });
    })();
  });
});

function makeJsonResponse(body: Object) {
  const responseOptions = new BaseResponseOptions();
  return new Response(responseOptions.merge({
    body
  }));
}
