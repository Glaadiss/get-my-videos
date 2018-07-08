import { combineReducers } from "redux";
import menu from "./menu";
import suggestions from "./suggestions";
import videos from "./videos";
import user from "./user";
import currentVideo from "./currentVideo";

export default combineReducers({
  menu,
  suggestions,
  videos,
  user,
  currentVideo
});
