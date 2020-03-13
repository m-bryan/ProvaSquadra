import { SHOW_MESSAGE, HIDE_MESSAGE } from "../actions/types";

const initialState = {
  showMessage: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return { ...state, showMessage: true }

    case HIDE_MESSAGE:
      return { ...state, showMessage: false }

    default:
      return state;
  }
}

export const showMessage = () => {
  return {
    type: SHOW_MESSAGE
  }
}

export const hideMessage = () => {
  return {
    type: HIDE_MESSAGE
  }
}
