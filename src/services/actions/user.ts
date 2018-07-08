import { ActionsUnion } from "./types";
import { createAction } from "./createAction";

export const SIGN_IN = "[user] sign in";

export const SIGN_OUT = "[user] sign out";

export const Actions = {
  signIn: () => createAction(SIGN_IN),
  signOut: () => createAction(SIGN_OUT)
};

export type Actions = ActionsUnion<typeof Actions>;
