import { addItemToCart, removeItemFromCart } from "../CartUtils";
import { CartActionTypes } from "../types";



export const cartReducer = (state = { cartItems: [] }, action) => {
  
    switch (action.type) {
        case CartActionTypes.ADD_ITEM:
           
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.REMOVE_ITEM:
            const items = state.cartItems.map(cartItem => {
                if (cartItem.id === action.payload) {
                    cartItem.quantity > 1 && cartItem.quantity--
                }
                return cartItem
            })
            return {
                ...state,
                cartItems: [...items]
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }
        default:
            return state
    }
}