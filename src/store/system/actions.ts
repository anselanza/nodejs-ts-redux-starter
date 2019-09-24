import { ADD_CLIENT, DELETE_CLIENT, SystemActionTypes } from './types';

export const addClient = (id: string): SystemActionTypes =>
 ({
     type: ADD_CLIENT,
     payload: {
         id,
         connected: false
     }
 })

export const deleteClient = (id: string): SystemActionTypes =>
 ({
     type: DELETE_CLIENT,
     payload: {
         id
     }
 })