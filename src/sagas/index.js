import { all } from "redux-saga/effects";
import carsSaga from "./carsSaga";


export default function* rootSaga() {
    yield all([carsSaga()])
}