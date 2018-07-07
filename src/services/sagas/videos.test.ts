import { getVideos } from "./videos";
import { put } from "redux-saga/effects";
import { GET_VIDEOS_FETCHED, Actions } from "../actions/videos";

let genInstance: Iterator<any>;

beforeEach(() => {
  genInstance = getVideos({ payload: { q: "" }, type: "" });
  genInstance.next(); // initial Call
  genInstance.next(); // yield delay
});

describe("videos sagas", () => {
  describe("getVideos generator call when API returns correct value", () => {
    test("it sends action with [] as payload and GET_VIDEOS_FETCHED as type", () => {
      expect(genInstance.next({ items: [] }).value).toEqual(
        put({ payload: [], type: GET_VIDEOS_FETCHED })
      );
    });

    describe("getVideos generator call when API returns bad value", () => {
      test("it sends errorAction with {reason: string} and GET_VIDEOS_ERROR as type", () => {
        expect(genInstance.next({ itemssss: [] }).value).toEqual(
          put(Actions.getVideosError())
        );
      });
    });
  });
});
