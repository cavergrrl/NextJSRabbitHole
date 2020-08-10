import * as types from '../types';

const initialState = {
    landingData: [],
    post: {},
    loading: true,
    error: null
}

export const landingReducer = (state = initialState, action ) => {
    switch (action.type) {
        case types.GET_LANDING_DATA:
            console.log("state...", state)
            console.log("producer:", action.payload.producer)
            console.log("proposed insured:", action.payload.proposedInsured)
            return {
                ...state,
                landingData: action.payload,
                loading: false,
                error: null
            };
        default:
            return state;
    }
};