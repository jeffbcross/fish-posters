import { TestBed, inject } from '@angular/core/testing';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsService]
    });
  });

  it('should be created', inject([ProductsService], (service: ProductsService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a list of fish', inject([ProductsService], (service: ProductsService) => {
    expect(Array.isArray(service.fish)).toBe(true);
    expect(Object.keys(service.fish[0]).sort()).toEqual(['id', 'name', 'pic']);
  }));
});
