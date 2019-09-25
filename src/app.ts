import store from './store';
import { addClient } from './store/system/actions';

console.log('initial state:', JSON.stringify(store.getState()));

store.dispatch(addClient('foo'));

console.log('new state:', JSON.stringify(store.getState()));