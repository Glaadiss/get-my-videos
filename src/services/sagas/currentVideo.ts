import { call, put } from "redux-saga/effects";
import { Actions } from "../actions/currentVideo";
import { Actions as VideoActions } from "../actions/videos";
import {
  getDetails as getDetailsAction,
  getRating,
  rate as rateAction
} from "../gapi";
import {
  DetailObject,
  AdjustemDetailItem,
  DetailItem,
  RateQuery
} from "../gapi/responseTypings";

export function* getDetails({
  payload: { id }
}: {
  payload: { id: string };
  type: string;
}) {
  try {
    const details = yield call(getDetailsAction, { id });
    const response = transformResponse(details)[0];
    yield put(Actions.getDetailsFetched(response));
    yield put(VideoActions.getVideos({ q: response.title }));
  } catch (error) {
    yield put(Actions.getDetailsError());
  }
}

function transformResponse(response: DetailObject): AdjustemDetailItem[] {
  return response.items.map(getInfoFromItem);
}

function getInfoFromItem(detailItem: DetailItem): AdjustemDetailItem {
  const { snippet, id, statistics } = detailItem;
  return {
    id: id.videoId || (id as any),
    title: snippet.title,
    description: snippet.description,
    publishedAt: snippet.publishedAt,
    thumbnail: snippet.thumbnails.default.url,
    statistics
  };
}

export function* getOwnerLikes({
  payload: { id }
}: {
  payload: { id: string };
  type: string;
}) {
  try {
    const ratings = yield call(getRating, { id });
    yield put(Actions.getOwnerLikesFetched(ratings.items[0]));
  } catch (error) {
    yield put(Actions.getOwnerLikesError());
  }
}

export function* rate({ payload }: { payload: RateQuery; type: string }) {
  try {
    const rate = yield call(rateAction, payload);
    yield put(Actions.rateConfirm(rate.rating));
  } catch (error) {
    yield put(Actions.rateError());
  }
}
