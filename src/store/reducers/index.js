import { combineReducers } from "redux";

const initialState = {
  events: [],
  eventDetails: {}
};

const slime = (state = initialState, action) => {
  switch (action.type) {
    case "actiontype":
      return {
        ...state,
        events: action.payload
      };
    case "action tpe":
      return {
        ...state,
        eventDetails: action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({
  user: slime
});
