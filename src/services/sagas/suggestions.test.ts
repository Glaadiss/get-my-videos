import { getSuggestions } from "./suggestions";
import { put } from "redux-saga/effects";
import { GET_SUGGESTIONS_FETCHED, Actions } from "../actions/suggestions";

let genInstance: Iterator<any>;

beforeEach(() => {
  genInstance = getSuggestions({ payload: { q: "" }, type: "" });
  genInstance.next(); // initial Call
  genInstance.next(); // yield delay
});

describe("suggestions sagas", () => {
  describe("getSuggestions generator call when API returns correct value", () => {
    test("it sends action with [] as payload and GET_SUGGESTIONS_FETCHED as type", () => {
      expect(genInstance.next({ items: [] }).value).toEqual(
        put({ payload: [], type: GET_SUGGESTIONS_FETCHED })
      );
    });

    describe("getSuggestions generator call when API returns bad value", () => {
      test("it sends errorAction with {reason: string} and GET_SUGGESTIONS_ERROR as type", () => {
        expect(genInstance.next({ itemssss: [] }).value).toEqual(
          put(Actions.getSuggestionsError())
        );
      });
    });
  });
});
