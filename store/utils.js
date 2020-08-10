import {createHook} from 'react-sweet-state';

const makeSelectorsIntoHooks = (selectors, store) => {
    Object.keys(selectors).reduce( (accSelectors, selectorName) => {
        accSelectors[selectorName] = createHook( store, {
            selector: selectors[selectorName]
        });
        return accSelectors;
    }, {});
};

export default makeSelectorsIntoHooks;