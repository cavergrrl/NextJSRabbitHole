import {createStore} from 'react-sweet-state';
import actions from './landingData.actions';

const initialState = {
    landingData: {},
    policyNumber: null,
    loading: true,
    error: null
};

const landingDataStore = createStore( {initialState, actions} );

export default landingDataStore;