import { combineReducers } from "react-redux";
import authReducer from "./authReducer";

export default combineReducers({ isSignedIn: authReducer });
