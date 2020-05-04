import { SEARCH_KEDAI } from "../types";

export const searchKedai = (payload) => (dispatch) => {
  dispatch({
    type: SEARCH_KEDAI,
    payload: payload,
  });
};
