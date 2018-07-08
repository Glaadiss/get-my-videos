import { takeLatest } from "redux-saga/effects";
import { getVideos, getPopularVideos } from "./videos";
import { getSuggestions } from "./suggestions";
import { GET_SUGGESTIONS_REQUEST } from "../actions/suggestions";
import {
  GET_VIDEOS_REQUEST,
  GET_POPULAR_VIDEOS_REQUEST
} from "../actions/videos";
import {
  GET_OWNER_LIKES_REQUEST,
  RATE_REQUEST,
  GET_DETAILS_REQUEST
} from "../actions/currentVideo";
import { rate, getOwnerLikes, getDetails } from "./currentVideo";
export default function* rootSaga() {
  yield takeLatest(GET_SUGGESTIONS_REQUEST, getSuggestions);
  yield takeLatest(GET_VIDEOS_REQUEST, getVideos);
  yield takeLatest(GET_DETAILS_REQUEST, getDetails);
  yield takeLatest(GET_POPULAR_VIDEOS_REQUEST, getPopularVideos);
  yield takeLatest(GET_OWNER_LIKES_REQUEST, getOwnerLikes);
  yield takeLatest(RATE_REQUEST, rate);
}
