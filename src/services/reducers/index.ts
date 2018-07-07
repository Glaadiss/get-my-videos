import { combineReducers } from "redux";
import menu from "./menu";
import suggestions from "./suggestions";
import videos from "./videos";

export default combineReducers({ menu, suggestions, videos });
