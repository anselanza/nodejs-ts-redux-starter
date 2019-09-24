"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
exports.addClient = (id) => ({
    type: types_1.ADD_CLIENT,
    payload: {
        id,
        connected: false
    }
});
exports.deleteClient = (id) => ({
    type: types_1.DELETE_CLIENT,
    payload: {
        id
    }
});
//# sourceMappingURL=actions.js.map