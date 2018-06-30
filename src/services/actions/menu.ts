import { ActionsUnion } from "./types";
import { createAction } from "./createAction";

export const OPEN_DRAWER = "[menu] open drawer";
export const CLOSE_DRAWER = "[menu] close drawer";

export const Actions = {
  openDrawer: () => createAction(OPEN_DRAWER),
  closeDrawer: () => createAction(CLOSE_DRAWER)
};

export type Actions = ActionsUnion<typeof Actions>;
