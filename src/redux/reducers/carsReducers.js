

import { CAR, CARS } from "../types";

export const carsReducer = (state = { cars: [] }, action) => {
    switch (action.type) {
        case CARS.GET_CARS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case CARS.GET_CARS_SUCCESS:
            return {
                ...state,
                loading: false,
                cars: [ ...action.cars ]
            }
        case CARS.GET_CARS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default: 
            return state
    }
}

export const carReducer = (state = { car: {} }, action) => {
    switch (action.type) {
        case CAR.GET_CAR_REQUEST:
            return {
                ...state,
                loading: true
            };
        case CAR.GET_CAR_SUCCESS:
            return {
                ...state,
                loading: false,
                car: action.car
            }
        case CAR.GET_CAR_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

