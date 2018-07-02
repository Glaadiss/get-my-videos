import { call, put } from "redux-saga/effects";
import { Actions, VideoQuery } from "../actions/videos";
import { getVideos as getVideosAction } from "../gapi";
import { RootObject, Item, AdjustedItem } from "../gapi/responseTypings";
import { delay } from "redux-saga";

export function* getVideos({
  payload: { q, maxResults }
}: {
  payload: VideoQuery;
  type: string;
}) {
  delay(500); // debounce request
  try {
    const videos = yield call(getVideosAction, { q, maxResults });
    put(Actions.getVideosFetched(transformResponse(videos)));
  } catch (error) {
    put(Actions.getVideosError());
  }
}

function transformResponse(videosResponse: RootObject): AdjustedItem[] {
  return videosResponse.items.map(getInfoFromItem);
}

function getInfoFromItem({ snippet, id }: Item): AdjustedItem {
  return {
    id: id.videoId,
    title: snippet.title,
    description: snippet.description,
    publishedAt: snippet.publishedAt,
    thumbnail: snippet.thumbnails.default.url
  };
}
