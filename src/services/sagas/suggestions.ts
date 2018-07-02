import { call, put } from "redux-saga/effects";
import { VideoQuery } from "../actions/videos";
import { Actions } from "../actions/suggestions";
import { getVideos as getVideosAction } from "../gapi";
import { RootObject, Item, Suggestion } from "../gapi/responseTypings";
import { delay } from "redux-saga";

export function* getSuggestions({
  payload: { q, maxResults }
}: {
  payload: VideoQuery;
  type: string;
}) {
  delay(500); // debounce request
  try {
    const videos = yield call(getVideosAction, { q, maxResults });
    put(Actions.getSuggestionsFetched(transformResponse(videos)));
  } catch (error) {
    put(Actions.getSuggestionsError());
  }
}

function transformResponse(videosResponse: RootObject): Suggestion[] {
  return videosResponse.items.map(getInfoFromItem);
}

function getInfoFromItem({ snippet, id }: Item): Suggestion {
  return {
    id: id.videoId,
    title: snippet.title
  };
}
