import axios from 'axios';
import * as types from '../types';

export const fetchInterviewData = () => async dispatch => {
    try {
        const response = await axios.get(process.env.INTERVIEW_BASE_API_URL + 'testconnectivity', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
                'Accept': '*/*'
            },
            crossDomain: true,
            crossOrgin: true,
        });
        console.log("API>>>>dummy interview data:", response);
        dispatch({
            type: types.GET_INTERVIEW_DATA,
            payload: response.data,
        });
    }
    catch (e) {
        if (e.response) {
            // Request was made and server responded with a status code outside the 2xx range
            console.log("Interview API data error:", e.response.data);
            console.log("Interview API data error status:", e.response.status);
            console.log("Interview API data error headers:", e.response.headers);
        }
        else if (e.request) {
            // Request was made but no response received.
            console.log("Interview API data no response error:", e);
        }
        else {
            console.log("Interview API data unknown error:", e);
        }
        dispatch({
            type: types.GET_INTERVIEW_DATA_ERROR,
            error: e,
        });
    }
};