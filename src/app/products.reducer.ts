import { Fish } from 'app/products.service';
import { Effect, Actions } from '@ngrx/effects';
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

type FishFetchAction = {
  type: 'FISH_FETCH'
};

type FishFetchedAction = {
  type: 'FISH_FETCHED',
  payload: Fish[]
};

type FishActions = FishFetchAction | FishFetchedAction;

type FishState = Fish[];
export function fishReducer (state, action: FishActions) {
  switch (action.type) {
    case 'FISH_FETCHED':
      return action.payload;
    default:
      return state;
  }
}

@Injectable()
export class FishEffects {
  @Effect() fetchFish = this.actions$
    .ofType('FISH_FETCH')
    .do(action => {
      console.log(action);
    })

    .switchMap(() => {
      return this.http.get('/assets/fish.json')
        .map(res => res.json());
    })
    .map(fish => {
      return {
        type: 'FISH_FETCHED',
        payload: fish
      };
    })
    .catch((err) => {
      return Observable.of({
        type: 'FISH_FETCH_FAILED',
        payload: err
      });
    });

  constructor(private http: Http,
              private actions$: Actions
  ) {}
}
