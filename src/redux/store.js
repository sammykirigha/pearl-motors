import { createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import createSagaMiddleware, { END } from 'redux-saga';
import rootSaga from '../sagas';

import { carsReducer } from './reducers/carsReducers';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        combineReducers({
            cars: carsReducer
        }),
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    )

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END)

    sagaMiddleware.run(rootSaga)

    return store;
}
