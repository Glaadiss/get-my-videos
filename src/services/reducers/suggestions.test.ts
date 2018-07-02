import {
  GET_SUGGESTIONS_REQUEST,
  GET_SUGGESTIONS_FETCHED,
  GET_SUGGESTIONS_ERROR
} from "../actions/suggestions";
import suggestionsReducer, { State } from "./suggestions";
import { Suggestion } from "../gapi/responseTypings";
import { VideoQuery } from "../actions/videos";

let defaultState: State;

beforeAll(() => {
  defaultState = {
    currentValue: "",
    suggestions: [],
    isLoading: false,
    isError: false
  };
});

describe("suggestions reducer", () => {
  describe("GET_SUGGESTIONS_REQUEST", () => {
    const payload: VideoQuery = { q: "q", maxResults: 5 };
    const expected = {
      suggestions: [],
      isLoading: true,
      isError: false,
      currentValue: ""
    };

    test("Changes 'isLoading' to true", () => {
      expect(
        suggestionsReducer(defaultState, {
          type: GET_SUGGESTIONS_REQUEST,
          payload
        })
      ).toEqual(expected);
    });

    test("Changes 'isError' to false", () => {
      expect(
        suggestionsReducer(
          { ...defaultState, isError: true },
          { type: GET_SUGGESTIONS_REQUEST, payload }
        )
      ).toEqual(expected);
    });
  });

  describe("GET_SUGGESTIONS_FETCHED", () => {
    const payload: Suggestion[] = [
      {
        id: "2",
        title: "suggestion"
      }
    ];
    const expected = {
      suggestions: [...payload],
      isLoading: false,
      isError: false,
      currentValue: ""
    };

    test("Changes 'isLoading' to false", () => {
      expect(
        suggestionsReducer(
          { ...defaultState, isLoading: true },
          { type: GET_SUGGESTIONS_FETCHED, payload }
        )
      ).toEqual(expected);
    });

    test("Changes 'isError' to false", () => {
      expect(
        suggestionsReducer(
          { ...defaultState, isError: true },
          { type: GET_SUGGESTIONS_FETCHED, payload }
        )
      ).toEqual(expected);
    });

    test("Add suggestion to suggestions array", () => {
      expect(
        suggestionsReducer(defaultState, {
          type: GET_SUGGESTIONS_FETCHED,
          payload
        })
      ).toEqual(expected);
    });
  });

  describe("GET_SUGGESTIONS_ERROR", () => {
    const expected = {
      suggestions: [],
      isLoading: false,
      isError: true,
      currentValue: ""
    };
    const payload = { reason: "Can't get suggestions" };
    test("Changes 'isLoading' to false", () => {
      expect(
        suggestionsReducer(
          { ...defaultState, isLoading: true },
          { type: GET_SUGGESTIONS_ERROR, payload }
        )
      ).toEqual(expected);
    });

    test("Changes 'isError' to true", () => {
      expect(
        suggestionsReducer(
          { ...defaultState, isError: false },
          { type: GET_SUGGESTIONS_ERROR, payload }
        )
      ).toEqual(expected);
    });
  });
});
