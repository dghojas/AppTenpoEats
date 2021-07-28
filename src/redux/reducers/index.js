import { ADD_ADDRESS } from '../actions/actionType';

const initialState = {
  address: '',
};

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_ADDRESS) {
    return {
      address: action.payload,
    };
  }
  return state;
};

export default rootReducer;
