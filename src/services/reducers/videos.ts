import {
  Actions,
  GET_VIDEOS_ERROR,
  GET_VIDEOS_FETCHED,
  GET_VIDEOS_REQUEST
} from "../actions/videos";
import { AdjustedItem } from "../gapi/responseTypings";

export type State = {
  videos: AdjustedItem[];
  isLoading: boolean;
  isError: boolean;
};

const defaultState = {
  videos: [],
  isLoading: false,
  isError: false
};

export default function videos(state: State = defaultState, action: Actions) {
  switch (action.type) {
    case GET_VIDEOS_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case GET_VIDEOS_FETCHED:
      const videos = action.payload as AdjustedItem[];
      return {
        ...state,
        isLoading: false,
        isError: false,
        videos: videos.length > 0 ? videos : state.videos
      };
    case GET_VIDEOS_ERROR:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
}
