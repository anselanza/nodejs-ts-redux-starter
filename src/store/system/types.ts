export interface Client {
    id: string,
    connected: boolean
}

export interface SystemState {
    clients: Client[]
}

export const ADD_CLIENT = 'ADD_CLIENT';
export const DELETE_CLIENT = 'DELETE_CLIENT';

interface AddClientAction {
    type: typeof ADD_CLIENT,
    payload: Client
}

interface DeleteClientAction {
    type: typeof DELETE_CLIENT
    payload: {
        id: string
    }
}

export type SystemActionTypes = AddClientAction | DeleteClientAction;