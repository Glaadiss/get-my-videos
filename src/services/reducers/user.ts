import { Actions, SIGN_IN, SIGN_OUT } from "../actions/user";

type State = {
  logged: boolean;
};

const defaultState = {
  logged: false
};

export default function user(state: State = defaultState, action: Actions) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, logged: true };
    case SIGN_OUT:
      return { ...state, logged: false };
    default:
      return state;
  }
}
