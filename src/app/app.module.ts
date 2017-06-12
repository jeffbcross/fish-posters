import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FishListComponent } from './fish-list/fish-list.component';
import { FishDetailComponent } from './fish-detail/fish-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FishListComponent,
    FishDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
        component: FishDetailComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
