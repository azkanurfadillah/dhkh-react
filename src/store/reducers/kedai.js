import { SEARCH_KEDAI } from "../types";

const initialState = null;

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_KEDAI:
      return action.payload;
    default:
      return state;
  }
}
