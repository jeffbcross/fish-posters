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

export interface CartRemoveAction {
  type: 'CART_REMOVE';
  payload: number;
}

export type CartAction = CartAddAction | CartRemoveAction;

export function cartReducer(state: CartState = {selectedProducts: {}}, action: CartAction) {
  switch (action.type) {
    case 'CART_ADD':
      const countForAdd = state.selectedProducts[action.payload] || 0;
      return {
        ...state,
        selectedProducts: {
          ...state.selectedProducts,
          [action.payload]: countForAdd + 1
        }
      };
    case 'CART_REMOVE':
      const countForRemove = state.selectedProducts[action.payload] || 0;
      return {
        ...state,
        selectedProducts: {
          ...state.selectedProducts,
          [action.payload]: countForRemove > 0 ? countForRemove - 1 : countForRemove
        }
      };
    default:
      return state;
  }

}
