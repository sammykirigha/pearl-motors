import data from '../../../data';
const {
    GET_CAR_REQUEST,
    GET_CAR_SUCCESS,
    GET_CAR_FAILED,
    GET_CARS_REQUEST,
    GET_CARS_SUCCESS,
    GET_CARS_FAILED
} = require('../types');
const res = data.filter((item) => item === item.id)
// const { data } = data
console.log(res);

export const getCars = () => dispatch => {
    dispatch({
        type: GET_CARS_REQUEST
    })

    try {
        dispatch({
            type: GET_CARS_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_CARS_FAILED,
            payload: 'Failed to load cars'
        })
    }
}

export const getCar = (id) => dispatch => {
    dispatch({
        type: GET_CAR_REQUEST
    })

    try {
        dispatch({
            type: GET_CAR_SUCCESS,
            payload: data.filter((data) => data.id)
        });
    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_CAR_FAILED,
            payload: 'Failed to load car'
        })
    }
}
