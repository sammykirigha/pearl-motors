import data from '../../../data';
const {
    GET_CAR_REQUEST,
    GET_CAR_SUCCESS,
    GET_CAR_FAILED,
    GET_CARS_REQUEST,
    GET_CARS_SUCCESS,
    GET_CARS_FAILED
} = require('../types');



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
