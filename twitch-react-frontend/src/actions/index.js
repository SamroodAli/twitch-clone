import streams from "../api/streams";
import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from "./types";

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
