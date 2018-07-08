import {
  GET_DETAILS_ERROR,
  GET_DETAILS_FETCHED,
  GET_DETAILS_REQUEST,
  Actions,
  reason,
  exampleAdjustemDetailItem
} from "./currentVideo";

describe("currentVideo action-creator", () => {
  test("getDetails return GET_DETAILS_REQUEST type and input as payload", () => {
    expect(Actions.getDetails({ id: "a" })).toEqual({
      type: GET_DETAILS_REQUEST,
      payload: { id: "a" }
    });
  });

  test("getDetailsFetched return GET_DETAILS_FETCHED type and input as payload", () => {
    expect(Actions.getDetailsFetched(exampleAdjustemDetailItem)).toEqual({
      type: GET_DETAILS_FETCHED,
      payload: exampleAdjustemDetailItem
    });
  });

  test("getDetailsError return GET_DETAILS_ERROR type and {reason: string} as output", () => {
    expect(Actions.getDetailsError()).toEqual({
      type: GET_DETAILS_ERROR,
      payload: { reason }
    });
  });
});
