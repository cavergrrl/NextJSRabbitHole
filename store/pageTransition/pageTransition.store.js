import {createStore} from 'react-sweet-state';
import actions from './pageTransition.actions';

const initialState = {};

const pageTransitionStore = createStore({initialState, actions});

export default pageTransitionStore;