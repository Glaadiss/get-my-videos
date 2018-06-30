import { OPEN_DRAWER, CLOSE_DRAWER } from "../actions/menu";
import menuReducer from "./menu";

describe("menu reducer", () => {
  test("returns {open: true} when type is OPEN_DRAWER", () => {
    expect(menuReducer({ open: false }, { type: OPEN_DRAWER })).toEqual({
      open: true
    });
  });

  test("returns {open: false} when type is CLOSE_DRAWER", () => {
    expect(menuReducer({ open: true }, { type: CLOSE_DRAWER })).toEqual({
      open: false
    });
  });
});
