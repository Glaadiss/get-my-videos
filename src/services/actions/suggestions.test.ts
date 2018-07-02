import {
  GET_SUGGESTIONS_ERROR,
  GET_SUGGESTIONS_FETCHED,
  GET_SUGGESTIONS_REQUEST,
  Actions,
  exampleSuggestion,
  reason
} from "./suggestions";

describe("suggestions action-creator", () => {
  test("getSuggestions return GET_SUGGESTIONS_REQUEST type and input as payload", () => {
    expect(Actions.getSuggestions({ q: "a" })).toEqual({
      type: GET_SUGGESTIONS_REQUEST,
      payload: { q: "a" }
    });
  });

  test("getSuggestionsFetched return GET_SUGGESTIONS_FETCHED type and input as payload", () => {
    expect(Actions.getSuggestionsFetched([exampleSuggestion])).toEqual({
      type: GET_SUGGESTIONS_FETCHED,
      payload: [exampleSuggestion]
    });
  });

  test("getSuggestionsError return GET_SUGGESTIONS_ERROR type and {reason: string} as output", () => {
    expect(Actions.getSuggestionsError()).toEqual({
      type: GET_SUGGESTIONS_ERROR,
      payload: { reason }
    });
  });
});
