import makeSelectorsIntoHooks from '../utils';
import landingDataStore from './landingData.store';

const landingDataSelectors = {
    useLandingDataActions: null,

};

export default makeSelectorsIntoHooks(landingDataSelectors, landingDataStore);