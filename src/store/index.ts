import { systemReducer } from './system/reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    system: systemReducer
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;