import { combineReducers } from 'redux';
import { landingReducer } from './landingReducer';
import { interviewReducer } from './interviewReducer';
import { pageTransitionReducer } from './pageTransitionReducer';
import { policyNumberReducer } from './policyNumberReducer';

export default combineReducers({
    landing: landingReducer,
    pageTransition: pageTransitionReducer,
    interview: interviewReducer,
    policyNumber: policyNumberReducer
});