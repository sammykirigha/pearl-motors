import { CartActionTypes } from "../types";


export const addItem = (car) => {
    console.log(car);
    return {
    type: CartActionTypes.ADD_ITEM,
    payload: car
}}

export const removeItem = (car) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: car.id
})

export const clearItemFromCart = (car) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: car
})