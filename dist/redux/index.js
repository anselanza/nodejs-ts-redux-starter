"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reducers_1 = require("./system/reducers");
const redux_1 = require("redux");
const rootReducer = redux_1.combineReducers({
    system: reducers_1.systemReducer
});
exports.default = rootReducer;
//# sourceMappingURL=index.js.map