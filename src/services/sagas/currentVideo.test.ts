import { getDetails } from "./currentVideo";
import { put } from "redux-saga/effects";
import { GET_DETAILS_FETCHED, Actions } from "../actions/currentVideo";

let genInstance: Iterator<any>;

beforeEach(() => {
  genInstance = getDetails({ payload: { id: "" }, type: "" });
  genInstance.next(); // initial Call
});

describe("details sagas", () => {
  describe("getDetails generator call when API returns correct value", () => {
    test("it sends action with [] as payload and GET_DETAILS_FETCHED as type", () => {
      expect(genInstance.next({ items: [] }).value).toEqual(
        put({ type: GET_DETAILS_FETCHED })
      );
    });

    describe("getDetails generator call when API returns bad value", () => {
      test("it sends errorAction with {reason: string} and GET_DETAILS_ERROR as type", () => {
        expect(genInstance.next({ itemssss: [] }).value).toEqual(
          put(Actions.getDetailsError())
        );
      });
    });
  });
});
