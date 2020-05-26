import * as actions from "./actions";
import { CHANGE_SEARCH_FIELD, REQUEST_KITTENS_PENDING } from "./constants.js";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]);

it("should create an action to search kittens", () => {
  const text = "wooo";
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it("handles requesting kittens API", () => {
  const store = mockStore();
  store.dispatch(actions.requestKittens());
  const action = store.getActions();
  const expectedAction = {
    type: REQUEST_KITTENS_PENDING,
  };
  expect(action[0]).toEqual(expectedAction);
});
