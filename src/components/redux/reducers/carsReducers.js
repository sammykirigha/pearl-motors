const {
    GET_CAR_REQUEST,
    GET_CAR_SUCCESS,
    GET_CAR_FAILED,
    GET_CARS_REQUEST,
    GET_CARS_SUCCESS,
    GET_CARS_FAILED
} = require('../types')

export const carsReducer = (state = {cars: [], car: {}}, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case GET_CARS_REQUEST:
            return {
                ...state,
                error: ''
            };
        case GET_CARS_SUCCESS:
            return {
                ...state,
                cars: [...payload],
                error: ''
            };
        case GET_CARS_FAILED:
            return {
                ...state,
                cars: [],
                error: payload
            };
        case GET_CAR_REQUEST:
            return {
                ...state,
                error: ''
            };
        case GET_CAR_SUCCESS:
            return {
                ...state,
                cars: payload,
                error: ''
            };
        case GET_CAR_FAILED:
            return {
                ...state,
                error: payload
            };
        default: 
            return state
    }
}