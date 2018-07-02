import { ActionsUnion } from "./types";
import { createAction } from "./createAction";
import { Suggestion } from "../gapi/responseTypings";
import { VideoQuery } from "./videos";

export const reason = "Can't fetch Suggestions";

export const exampleSuggestion: Suggestion = {
  id: "2",
  title: "video"
};

export const GET_SUGGESTIONS_REQUEST =
  "[suggestionsRequest] get suggestions request";
export const GET_SUGGESTIONS_FETCHED =
  "[suggestionsFetched] get suggestions fetched";
export const GET_SUGGESTIONS_ERROR = "[suggestionsError] get suggestions error";

export const Actions = {
  getSuggestions: (payload: VideoQuery) =>
    createAction(GET_SUGGESTIONS_REQUEST, payload),

  getSuggestionsFetched: (payload: Suggestion[]) =>
    createAction(GET_SUGGESTIONS_FETCHED, payload),

  getSuggestionsError: () => createAction(GET_SUGGESTIONS_ERROR, { reason })
};

export type Actions = ActionsUnion<typeof Actions>;
