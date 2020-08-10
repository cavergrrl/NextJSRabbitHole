import React from 'react';
import * as types from '../types';
import * as data from '../../dummy-pageTransitionData.json';
import axios from 'axios';

export const fetchPageTransitionData = () => async dispatch => {
    console.log("INTERVIEW_BASE_API_URL:", process.env.INTERVIEW_BASE_API_URL);

    const response = await axios.get(process.env.INTERVIEW_BASE_API_URL + 'testconnectivity/', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
            'Accept': '*/*'
        },
        crossDomain: true,
        crossOrigin: true,
    });
    console.log("..........Test connectivity from interview: ", response.data);

    dispatch({
        type: types.GET_PAGE_TRANSITION_DATA,
        payload: data.default,
    });
};