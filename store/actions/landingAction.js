import * as types from '../types';
import * as data from '../../dummy-landingData.json';
import axios from 'axios';

export const fetchLandingData = (policyNumber) => async dispatch => {
    console.log("Policy Number: ", policyNumber);
    console.log("INTERVIEW_STATE_BASE_API_URL:", process.env.INTERVIEW_STATE_BASE_API_URL);
    if (policyNumber && policyNumber.policyNumber !== "") {
        const response = await axios.get(process.env.INTERVIEW_STATE_BASE_API_URL + 'policyNumber/' + policyNumber.policyNumber, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
                'Accept': '*/*'
            },
            crossDomain: true,
            crossOrigin: true,
        });
        console.log("Producer from interviewState: ", response.data.producer);
        console.log("Insured from interviewState: ", response.data.proposedInsured);
        dispatch({
            type: types.GET_LANDING_DATA,
            payload: response.data
        });
    }
    else {
        dispatch({
            type: types.GET_LANDING_DATA,
            payload: data.default
        });
    }

};
