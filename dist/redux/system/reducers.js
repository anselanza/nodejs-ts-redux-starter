"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const initialState = {
    clients: []
};
exports.systemReducer = (state = initialState, action) => {
    switch (action.type) {
        case types_1.ADD_CLIENT:
            return {
                clients: [...state.clients, action.payload]
            };
        case types_1.DELETE_CLIENT:
            return {
                clients: state.clients.filter(client => client.id !== action.payload.id)
            };
        default:
            return state;
    }
};
//# sourceMappingURL=reducers.js.map