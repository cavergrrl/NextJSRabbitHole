import * as types from '../types';

const initialState = {
    pageData: [],
    post: {},
    loading: true,
    error: null
}

export const pageTransitionReducer = (state = initialState, action ) => {
    switch (action.type) {
        case types.GET_PAGE_TRANSITION_DATA:
            return {
                ...state,
                pageData: action.payload,
                loading: false,
                error: null
            };
        default:
            return state;
    }
};