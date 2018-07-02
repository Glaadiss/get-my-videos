import { takeLatest } from "redux-saga/effects";
import { getVideos } from "./videos";
import { getSuggestions } from "./suggestions";
import { GET_SUGGESTIONS_REQUEST } from "../actions/suggestions";
import { GET_VIDEOS_REQUEST } from "../actions/videos";

export default function* rootSaga() {
  yield takeLatest(GET_SUGGESTIONS_REQUEST, getSuggestions);
  yield takeLatest(GET_VIDEOS_REQUEST, getVideos);
}
