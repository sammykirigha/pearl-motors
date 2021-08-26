import { all } from "redux-saga/effects";
import carSaga from "./carSaga";
import carsSaga from "./carsSaga";


export default function* rootSaga() {
    yield all([carsSaga(), carSaga()])
}