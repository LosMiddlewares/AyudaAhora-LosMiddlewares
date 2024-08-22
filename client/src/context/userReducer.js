import { type } from "../types/type.js";

export const userReducer = (state, action) => {
    switch (action.type) {
        case type.LOGIN:
            return {
                ...state,
                isLogged: true,
                user: action.payload.user
            };
        case type.LOGOUT:
            return {
                isLogged: false,
                user: null
            };
        default:
            return state;
    }
}
