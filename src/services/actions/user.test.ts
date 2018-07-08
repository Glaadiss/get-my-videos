import { SIGN_IN, SIGN_OUT, Actions } from "./user";

describe("user action-creator", () => {
  test("signIn return OPEN_DRAWER type", () => {
    expect(Actions.signIn()).toEqual({ type: SIGN_IN });
  });

  test("closeDrawer return CLOSE_DRAWER type", () => {
    expect(Actions.signOut()).toEqual({ type: SIGN_OUT });
  });
});
