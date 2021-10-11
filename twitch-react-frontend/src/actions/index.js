import streams from "../api/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: { userId },
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch) => {
  const response = await streams.post(
    "http://localhost:3001/streams",
    formValues
  );
  dispatch({ action: CREATE_STREAM, payload: { data: response.data } });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: { data: response.data } });
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("streams");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.put(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: { data: response.data } });
};
