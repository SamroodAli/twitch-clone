import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from "./types";

const streamsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return action.payload;
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return { ...state, [action.payload.id]: undefined };
    default:
      return state;
  }
};

export default streamsReducer;
