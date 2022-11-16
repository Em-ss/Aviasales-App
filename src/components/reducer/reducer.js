import { legacy_createStore as createStore } from 'redux';

const defaultState = {
  checkBoxAll: false,
  checkBoxNull: false,
  checkBoxOne: false,
  checkBoxTwo: false,
  checkBoxThree: false,
};

const reducer = (state = defaultState, action) => {
  console.log(state);

  switch (action.type) {
    case 'CHB_All':
      return { ...state, checkBoxAll: action.payload };
    case 'CHB_N':
      return { ...state, checkBoxNull: action.payload };
    case 'CHB1':
      return { ...state, checkBoxOne: action.payload };
    case 'CHB2':
      return { ...state, checkBoxTwo: action.payload };
    case 'CHB3':
      return { ...state, checkBoxThree: action.payload };
    // case :
    //   return { ...state, checkBoxAll: true };

    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
