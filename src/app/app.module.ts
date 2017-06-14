import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FishListComponent } from './fish-list/fish-list.component';
import { ProductsService } from 'app/products.service';
import { ButtonComponent } from './button/button.component';
import { ButtonModule } from 'app/button/button.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { StoreModule } from '@ngrx/store';

import { cartReducer } from 'app/shopping-cart/reducer';

@NgModule({
  declarations: [
    AppComponent,
    FishListComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    StoreModule.provideStore(cartReducer, {
      selectedProducts: {}
    }),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'fish',
        pathMatch: 'full'
      }, {
        path: 'fish',
        component: FishListComponent
      }, {
        path: 'fish/:id',
        loadChildren: './fish-detail/fish-detail.module#FishDetailModule'
      }
    ])
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
