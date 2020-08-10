import * as types from '../types';

const initialState = {
    data: [],
    post: {},
    loading: false,
    error: null
}

export const interviewReducer = (state = initialState, action ) => {
    switch (action.type) {
        case types.GET_INTERVIEW_DATA:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            };
        case types.GET_INTERVIEW_DATA_ERROR:
            return {
                ...state,
                data: null,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};