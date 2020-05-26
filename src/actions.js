import { apiCall } from "./api/api";
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_KITTENS_PENDING,
  REQUEST_KITTENS_SUCCESS,
  REQUEST_KITTENS_FAILED,
  ADD_KITTEN,
} from "./constants.js";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestKittens = () => (dispatch) => {
  dispatch({ type: REQUEST_KITTENS_PENDING });
  apiCall("https://jsonplaceholder.typicode.com/users")
    .then((data) => dispatch({ type: REQUEST_KITTENS_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: REQUEST_KITTENS_FAILED, payload: error })
    );
};

export const addKitten = (kittenName) => ({
  type: ADD_KITTEN,
  payload: kittenName,
});
