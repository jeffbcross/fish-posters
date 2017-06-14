import { Fish } from 'app/products.service';

export interface CartState {
  selectedProducts: {
    // id of the fish is the key, and how many of it is the value
    [key: number]: number;
  };
}

export interface CartAddAction {
  type: 'CART_ADD';
  payload: number;
}

export type CartAction = CartAddAction;

export function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case 'CART_ADD':
      // TODO
    default:
      return state;
  }

}