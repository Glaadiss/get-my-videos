import { Actions, CLOSE_DRAWER, OPEN_DRAWER } from "../actions/menu";

type State = {
  open: boolean;
};

const defaultState = {
  open: true
};

export default function menu(state: State = defaultState, action: Actions) {
  switch (action.type) {
    case CLOSE_DRAWER:
      return { ...state, open: false };
    case OPEN_DRAWER:
      return { ...state, open: true };
    default:
      return state;
  }
}
