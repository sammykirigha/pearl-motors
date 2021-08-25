import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects'
import { getCarsFail, getCarsSuccess } from '../redux/actions/carsAction';
import { CARS } from '../redux/types';

const getCars = async () => {
    const {data} = await axios.get("http://my-json-server.typicode.com/sammykirigha/my-vehicles/cars")
    // console.log("my data",data);
    return data;
}

function* handlesGetCars(action) {
    try {
        const cars = yield call(getCars);
        yield put(getCarsSuccess(cars))
    } catch (error) {
        yield put(getCarsFail('Failed to load cars'))
    }
}

export default function* carsSaga() {
    yield takeLatest(CARS.GET_CARS_REQUEST, handlesGetCars)
}