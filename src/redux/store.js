import { createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import createSagaMiddleware, { END } from 'redux-saga';
import rootSaga from '../sagas';

import { carReducer, carsReducer } from './reducers/carsReducers';
import { cartReducer } from './reducers/CartReducers';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        combineReducers({
            cars: carsReducer,
            car: carReducer,
            cart: cartReducer
        }),
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    )

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END)

    sagaMiddleware.run(rootSaga)

    return store;
}
