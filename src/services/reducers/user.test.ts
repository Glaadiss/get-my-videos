import { SIGN_IN, SIGN_OUT } from "../actions/user";
import userReducer from "./user";

describe("user reducer", () => {
  test("returns {logged: true} when type is SIGN_IN", () => {
    expect(userReducer({ logged: false }, { type: SIGN_IN })).toEqual({
      logged: true
    });
  });

  test("returns {logged: false} when type is SIGN_OUT", () => {
    expect(userReducer({ logged: true }, { type: SIGN_OUT })).toEqual({
      logged: false
    });
  });
});
