import { systemReducer } from './system/reducers';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
    system: systemReducer
});

export type AppState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer);

export default store;