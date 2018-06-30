import { OPEN_DRAWER, CLOSE_DRAWER, Actions } from "./menu";

describe("menu action-creator", () => {
  test("openDrawer return OPEN_DRAWER type", () => {
    expect(Actions.openDrawer()).toEqual({ type: OPEN_DRAWER });
  });

  test("closeDrawer return CLOSE_DRAWER type", () => {
    expect(Actions.closeDrawer()).toEqual({ type: CLOSE_DRAWER });
  });
});
