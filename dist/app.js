"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const store_1 = __importDefault(require("./store"));
const actions_1 = require("./store/system/actions");
const store = redux_1.createStore(store_1.default);
console.log('initial state:', JSON.stringify(store.getState()));
store.dispatch(actions_1.addClient('foo'));
console.log('new state:', JSON.stringify(store.getState()));
//# sourceMappingURL=app.js.map