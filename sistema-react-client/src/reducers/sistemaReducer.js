import { GET_SISTEMAS } from "../actions/types";

const initialState = {
    sistemas: [],
    sistema: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SISTEMAS: return {
            ...state,
            sistemas: action.payload
        };
        default:
            return state;
    }
}