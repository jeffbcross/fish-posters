import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartComponent } from './shopping-cart.component';
import { By } from '@angular/platform-browser';
import { CartAddAction, cartReducer, CartState } from './reducer';
import { StoreModule, Store } from '@ngrx/store';
import { ProductsService } from '../products.service';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { ButtonModule } from '../button/button.module';
import 'rxjs/add/observable/of';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;
  const sampleFish = [{
    id: 42,
    name: 'test-halibut',
    pic: '/assets/halibut-full.jpg'
  }, {
    id: 43,
    name: 'test-squid',
    pic: '/assets/squid-full.jpg'
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ButtonModule,
        StoreModule.provideStore(cartReducer, {
          productQuantities: {}
        })
      ],
      declarations: [ ShoppingCartComponent ],
      providers: [{
        provide: ProductsService,
        useValue: {
          fish$: Observable.of(sampleFish)
        }
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


  it('should have no products by default', () => {
    const statusText = fixture.debugElement.query(By.css('.cart-status')).nativeElement.textContent;
    expect(statusText.trim()).toContain('No products added to cart.');
  });

  it('should show product when add action called', inject([Store], (store: Store<CartState>) => {
    store.dispatch(<CartAddAction>{type: 'CART_ADD', payload: 42});
    fixture.detectChanges();
    const viewList = fixture.debugElement.queryAll(By.css('.cart-status ul li'));
    expect(viewList.length).toBe(1);
  }));

  it('should increment existing product count', inject([Store], (store: Store<CartState>) => {
    store.dispatch(<CartAddAction>{type: 'CART_ADD', payload: 42}); // add 1
    component.onIncrement(42); // increment to 2
    fixture.detectChanges();
    const quantities = fixture.debugElement.queryAll(By.css('.quantity'));
    expect(quantities[0].nativeElement.textContent).toBe('2');
  }));

  it('should decrement existing product count', inject([Store], (store: Store<CartState>) => {
    store.dispatch(<CartAddAction>{type: 'CART_ADD', payload: 42}); // add 1
    component.onIncrement(42); // increment to 2
    component.onIncrement(42); // increment to 3
    component.onDecrement(42); // decrement to 2
    fixture.detectChanges();
    const quantities = fixture.debugElement.queryAll(By.css('.quantity'));
    expect(quantities[0].nativeElement.textContent).toBe('2');
  }));

  it('should not display items when decremented to zero', inject([Store], (store: Store<CartState>) => {
    store.dispatch(<CartAddAction>{type: 'CART_ADD', payload: 42}); // add 1
    component.onDecrement(42); // decrement to 0
    fixture.detectChanges();
    const statusText = fixture.debugElement.query(By.css('.cart-status')).nativeElement.textContent;
    expect(statusText.trim()).toContain('No products added to cart.');
  }));
});
