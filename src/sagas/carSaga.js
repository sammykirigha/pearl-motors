import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects'
import { getCarFail, getCarSuccess } from '../redux/actions/carsAction';
import { CAR } from '../redux/types';

const getCar = async (id) => {
    const { data } = await axios.get(`http://my-json-server.typicode.com/sammykirigha/my-vehicles/cars/${id}`)
    // console.log("my data",data);
    return data;
}

function* handlesGetCar(action) {
    // console.log("m dataaaaaaa",action);

    try {
        const car = yield call(getCar, action.id);
        yield put(getCarSuccess(car))
    } catch (error) {
        yield put(getCarFail('Failing to load...'))
    }
}

export default function* carSaga() {
    console.log("got herreeeeee");
    yield takeLatest(CAR.GET_CAR_REQUEST, handlesGetCar)
}