import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import { CHB_All, CHB_N, CHB1, CHB2, CHB3, LOAD_SEARCHID, MORE, SORT_BOTTOM, SORT_FAST } from './actionCase.js';

const defaultState = {
  checkBoxAll: false,
  checkBoxNull: false,
  checkBoxOne: false,
  checkBoxTwo: false,
  checkBoxThree: false,
  tickets: {},
  filterOne: [],
  filterTwo: [],
  filterThree: [],
  filterNull: [],
  more: 5,
  id: '',
  sortBottomTickets: false,
  sortFastTickets: false,
  loading: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHB_All:
      return { ...state, checkBoxAll: action.payload };
    case CHB_N:
      return { ...state, checkBoxNull: action.payload, filterNull: action.payload1 };
    case CHB1:
      return { ...state, checkBoxOne: action.payload, filterOne: action.payload1 };
    case CHB2:
      return { ...state, checkBoxTwo: action.payload, filterTwo: action.payload1 };
    case CHB3:
      return { ...state, checkBoxThree: action.payload, filterThree: action.payload1 };
    case LOAD_SEARCHID:
      return { ...state, tickets: action.payload, loading: action.loading };
    case MORE:
      return { ...state, more: state.more + action.payload, id: action.id };
    case SORT_BOTTOM:
      return { ...state, sortBottomTickets: action.payload };
    case SORT_FAST:
      return { ...state, sortFastTickets: action.payload };

    default:
      return state;
  }
};

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));

export default store;
