import {
    SystemState,
    SystemActionTypes,
    ADD_CLIENT,
    DELETE_CLIENT
} from './types';

const initialState: SystemState = {
    clients: []
}

export const systemReducer = (state = initialState, action: SystemActionTypes): SystemState => {
    switch(action.type) {
        case ADD_CLIENT:
            return {
                clients: [...state.clients, action.payload]
            }
        case DELETE_CLIENT:
            return {
                clients: state.clients.filter(
                    client => client.id !== action.payload.id
                )
            }
        default:
            return state;
    }
}