import {
  PERSONS_FETCH_FAIL,
  PERSONS_FETCH_REQUEST,
  PERSONS_FETCH_SUCCESS,
} from "../constants/personConstants";

const fetchAllPersonsReducer = (state = {}, action) => {
  switch (action.type) {
    case PERSONS_FETCH_REQUEST:
      return {
        loading: true,
      };
    case PERSONS_FETCH_SUCCESS:
      return {
        loading: false,
        persons: action.payload,
      };
    case PERSONS_FETCH_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
