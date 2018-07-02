import {
  GET_VIDEOS_REQUEST,
  VideoQuery,
  GET_VIDEOS_FETCHED,
  GET_VIDEOS_ERROR,
  exampleAdjustedItem
} from "../actions/videos";
import videosReducer, { State } from "./videos";
import { AdjustedItem } from "../gapi/responseTypings";

let defaultState: State;

beforeAll(() => {
  defaultState = {
    videos: [],
    isLoading: false,
    isError: false
  };
});

describe("videos reducer", () => {
  describe("GET_VIDEOS_REQUEST", () => {
    const payload: VideoQuery = { q: "q", maxResults: 5 };
    const expected = { videos: [], isLoading: true, isError: false };

    test("Changes 'isLoading' to true", () => {
      expect(
        videosReducer(defaultState, { type: GET_VIDEOS_REQUEST, payload })
      ).toEqual(expected);
    });

    test("Changes 'isError' to false", () => {
      expect(
        videosReducer(
          { ...defaultState, isError: true },
          { type: GET_VIDEOS_REQUEST, payload }
        )
      ).toEqual(expected);
    });
  });

  describe("GET_VIDEOS_FETCHED", () => {
    const payload: AdjustedItem[] = [exampleAdjustedItem];
    const expected = { videos: [...payload], isLoading: false, isError: false };

    test("Changes 'isLoading' to false", () => {
      expect(
        videosReducer(
          { ...defaultState, isLoading: true },
          { type: GET_VIDEOS_FETCHED, payload }
        )
      ).toEqual(expected);
    });

    test("Changes 'isError' to false", () => {
      expect(
        videosReducer(
          { ...defaultState, isError: true },
          { type: GET_VIDEOS_FETCHED, payload }
        )
      ).toEqual(expected);
    });

    test("Add video to videos array", () => {
      expect(
        videosReducer(defaultState, { type: GET_VIDEOS_FETCHED, payload })
      ).toEqual(expected);
    });
  });

  describe("GET_VIDEOS_ERROR", () => {
    const expected = { videos: [], isLoading: false, isError: true };
    const payload = { reason: "Can't get videos" };
    test("Changes 'isLoading' to false", () => {
      expect(
        videosReducer(
          { ...defaultState, isLoading: true },
          { type: GET_VIDEOS_ERROR, payload }
        )
      ).toEqual(expected);
    });

    test("Changes 'isError' to true", () => {
      expect(
        videosReducer(
          { ...defaultState, isError: false },
          { type: GET_VIDEOS_ERROR, payload }
        )
      ).toEqual(expected);
    });
  });
});
