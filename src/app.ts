import { createStore } from 'redux';
import rootReducer from './store';
import { addClient } from './store/system/actions';

const store = createStore(rootReducer);

console.log('initial state:', JSON.stringify(store.getState()));

store.dispatch(addClient('foo'));

console.log('new state:', JSON.stringify(store.getState()));