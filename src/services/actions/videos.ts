import { ActionsUnion } from "./types";
import { createAction } from "./createAction";
import { AdjustedItem } from "../gapi/responseTypings";

export const GET_VIDEOS_REQUEST = "[videosRequest] get videos request";
export const GET_VIDEOS_FETCHED = "[videosFetched] get videos fetched";
export const GET_VIDEOS_ERROR = "[videosError] get videos error";
export const reason = "Can't fetch videos";

export const exampleAdjustedItem: AdjustedItem = {
  id: "2",
  description: "nice video",
  title: "video",
  thumbnail: "www.photo.jpg",
  publishedAt: new Date()
};

export interface VideoQuery {
  q: string;
  maxResults?: number;
}

export interface VideoAction {
  payload: VideoQuery;
  type: string;
}

export const Actions = {
  getVideos: (payload: VideoQuery) => createAction(GET_VIDEOS_REQUEST, payload),

  getVideosFetched: (payload: AdjustedItem[]) =>
    createAction(GET_VIDEOS_FETCHED, payload),

  getVideosError: () => createAction(GET_VIDEOS_ERROR, { reason })
};

export type Actions = ActionsUnion<typeof Actions>;
