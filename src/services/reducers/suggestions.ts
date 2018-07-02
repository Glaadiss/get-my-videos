import {
  Actions,
  GET_SUGGESTIONS_ERROR,
  GET_SUGGESTIONS_FETCHED,
  GET_SUGGESTIONS_REQUEST
} from "../actions/suggestions";
import { Suggestion } from "../gapi/responseTypings";

export type State = {
  currentValue: string;
  suggestions: Suggestion[];
  isLoading: boolean;
  isError: boolean;
};

const defaultState = {
  currentValue: "",
  suggestions: [],
  isLoading: false,
  isError: false
};

export default function suggestions(
  state: State = defaultState,
  action: Actions
) {
  switch (action.type) {
    case GET_SUGGESTIONS_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case GET_SUGGESTIONS_FETCHED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        suggestions: action.payload
      };
    case GET_SUGGESTIONS_ERROR:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
}
