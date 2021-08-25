import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects'
import { getCarSuccess } from '../redux/actions/carsAction';

const getCar = async (id) => {
    const { data } = await axios.get(`http://my-json-server.typicode.com/sammykirigha/my-vehicles/cars/${id}`)
    // console.log("my data",data);
    return data;
}

function* handlesGetCars(action) {
    const { id } = action
    console.log("my ids",id);
    try {
        const cars = yield call(getCar, id);
        yield put(getCarSuccess())
    } catch (error) {
        yield put(getCarsFail('Failed to load cars'))
    }
}

export default function* carsSaga() {
    yield takeLatest(CARS.GET_CARS_REQUEST, handlesGetCars)
}