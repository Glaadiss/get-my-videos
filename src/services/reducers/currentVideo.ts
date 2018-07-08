import {
  Actions,
  GET_DETAILS_REQUEST,
  GET_DETAILS_FETCHED,
  GET_DETAILS_ERROR,
  GET_OWNER_LIKES_REQUEST,
  GET_OWNER_LIKES_FETCHED,
  GET_OWNER_LIKES_ERROR,
  RATE_REQUEST,
  RATE_CONFIRM,
  RATE_ERROR
} from "../actions/currentVideo";
import { RatingEnum, AdjustemDetailItem } from "../gapi/responseTypings";

type State = AdjustemDetailItem & {
  isLikesLoading: boolean;
  isVideoLoading: boolean;
  currentUserLike: RatingEnum;
  isError: boolean;
};

const defaultState = {
  isError: false,
  currentUserLike: "none" as RatingEnum,
  isLikesLoading: false,
  isVideoLoading: false,
  title: "",
  id: "",
  thumbnail: "",
  publishedAt: new Date(),
  description: "",
  statistics: {
    viewCount: "",
    likeCount: "",
    dislikeCount: "",
    favoriteCount: "",
    commentCount: ""
  }
};

export default function currentVideo(
  state: State = defaultState,
  action: Actions
) {
  switch (action.type) {
    case GET_DETAILS_REQUEST:
      return {
        ...state,
        isError: false,
        isVideoLoading: true,
        isLikesLoading: true,
        id: action.payload.id
      };
    case GET_DETAILS_FETCHED:
      return {
        ...state,
        isVideoLoading: false,
        isLikesLoading: false,
        ...action.payload
      };
    case GET_DETAILS_ERROR:
      return {
        ...state,
        isVideoLoading: false,
        isLikesLoading: false,
        isError: true
      };
    case GET_OWNER_LIKES_REQUEST:
      return {
        ...state,
        isLikesLoading: true
      };
    case GET_OWNER_LIKES_FETCHED:
      return {
        ...state,
        isLikesLoading: false,
        currentUserLike: action.payload.rating
      };
    case GET_OWNER_LIKES_ERROR:
      return {
        ...state,
        isLikesLoading: false,
        isError: true
      };
    case RATE_REQUEST:
      return {
        ...state,
        isLikesLoading: true
      };
    case RATE_CONFIRM:
      return {
        ...state,
        isLikesLoading: false,
        currentUserLike: action.payload
      };
    case RATE_ERROR:
      return {
        ...state,
        isLikesLoading: false,
        isError: true
      };

    default:
      return state;
  }
}
