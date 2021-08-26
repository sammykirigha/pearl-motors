

import { CAR, CARS } from "../types";

export const loadCars = () => {
    return ({
        type: CARS.GET_CARS_REQUEST
    });};

export const getCarsSuccess = (cars) => ({
    type: CARS.GET_CARS_SUCCESS,
    cars
});

export const getCarsFail = (error) => ({
    type: CARS.GET_CARS_FAILED,
    error     
})


export const loadCar = (id) => {
    return ({
        type: CAR.GET_CAR_REQUEST,
        id
    });
};

export const getCarSuccess = (car) => ({
    type: CAR.GET_CAR_SUCCESS,
    car
});

export const getCarFail = (error) => ({
    type: CAR.GET_CAR_FAILED,
    error
})
