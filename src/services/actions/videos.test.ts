import {
  GET_VIDEOS_ERROR,
  GET_VIDEOS_FETCHED,
  GET_VIDEOS_REQUEST,
  Actions,
  exampleAdjustedItem,
  reason
} from "./videos";

describe("videos action-creator", () => {
  test("getVideos return GET_VIDEOS_REQUEST type and input as payload", () => {
    expect(Actions.getVideos({ q: "a" })).toEqual({
      type: GET_VIDEOS_REQUEST,
      payload: { q: "a" }
    });
  });

  test("getVideosFetched return GET_VIDEOS_FETCHED type and input as payload", () => {
    expect(Actions.getVideosFetched([exampleAdjustedItem])).toEqual({
      type: GET_VIDEOS_FETCHED,
      payload: [exampleAdjustedItem]
    });
  });

  test("getVideosError return GET_VIDEOS_ERROR type and {reason: string} as output", () => {
    expect(Actions.getVideosError()).toEqual({
      type: GET_VIDEOS_ERROR,
      payload: { reason }
    });
  });
});
