import { ActionsUnion } from "./types";
import { createAction } from "./createAction";
import {
  AdjustemDetailItem,
  RatingItem,
  RateQuery,
  RatingEnum
} from "../gapi/responseTypings";
import { exampleAdjustedItem } from "./videos";

export const GET_DETAILS_REQUEST = "[currentVideo] get details request";
export const GET_DETAILS_FETCHED = "[currentVideo] get details fetched";
export const GET_DETAILS_ERROR = "[currentVideo] get details error";
export const GET_OWNER_LIKES_REQUEST = "[currentVideo] get owner likes request";
export const GET_OWNER_LIKES_FETCHED = "[currentVideo] get owner likes fetched";
export const GET_OWNER_LIKES_ERROR = "[currenVideo] get owner likes error";
export const RATE_REQUEST = "[currentVideo] rate request";
export const RATE_CONFIRM = "[currentVideo] rate confirm";
export const RATE_ERROR = "[currentVideo] rate error";

export const reason = "Can't fetch Details about video";
export const getRatesReason = "Can't fetch information about currentUser rates";
export const rateReason = "Can't rate currentVideo";

export const exampleAdjustemDetailItem = {
  ...exampleAdjustedItem,
  statistics: {
    viewCount: "2133",
    likeCount: "2141",
    dislikeCount: "213",
    favoriteCount: "232",
    commentCount: "21"
  }
};

export const Actions = {
  getDetails: ({ id }: { id: string }) =>
    createAction(GET_DETAILS_REQUEST, { id }),

  getDetailsFetched: (payload: AdjustemDetailItem) =>
    createAction(GET_DETAILS_FETCHED, payload),

  getDetailsError: () => createAction(GET_DETAILS_ERROR, { reason }),

  getOwnerLikes: ({ id }: { id: string }) =>
    createAction(GET_OWNER_LIKES_REQUEST, { id }),

  getOwnerLikesFetched: (payload: RatingItem) =>
    createAction(GET_OWNER_LIKES_FETCHED, payload),

  getOwnerLikesError: () =>
    createAction(GET_OWNER_LIKES_ERROR, { reason: getRatesReason }),

  rate: (payload: RateQuery) => createAction(RATE_REQUEST, payload),

  rateConfirm: (rating: RatingEnum) => createAction(RATE_CONFIRM, rating),

  rateError: () => createAction(RATE_ERROR, { rason: rateReason })
};

export type Actions = ActionsUnion<typeof Actions>;
