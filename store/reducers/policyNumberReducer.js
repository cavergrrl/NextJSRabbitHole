import * as types from '../types';

const initialState = {
    policyNumber: ""
}

export const policyNumberReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_POLICY_NUMBER:
            const response = {
                policyNumber: action.payload
            };
            return response;
        default:
            return state;
    }
};