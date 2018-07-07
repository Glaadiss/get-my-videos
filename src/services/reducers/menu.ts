import { Actions, CLOSE_DRAWER, OPEN_DRAWER } from "../actions/menu";
import {
  CHANGE_SUGGESTION_VALUE,
  Actions as SuggestionsAction
} from "../actions/suggestions";

type State = {
  open: boolean;
};

const defaultState = {
  open: true
};

export default function menu(
  state: State = defaultState,
  action: Actions | SuggestionsAction
) {
  switch (action.type) {
    case CLOSE_DRAWER:
      return { ...state, open: false };
    case OPEN_DRAWER:
    case CHANGE_SUGGESTION_VALUE:
      return { ...state, open: true };
    default:
      return state;
  }
}
