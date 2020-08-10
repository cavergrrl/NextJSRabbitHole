import * as types from '../types';

export const storePolicyNumber = (policyNumber) => dispatch => {
    console.log("Setting policy number: ", policyNumber);
    dispatch({
        type: types.SET_POLICY_NUMBER,
        payload: policyNumber
    })
};