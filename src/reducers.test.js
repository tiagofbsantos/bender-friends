import {
  CHANGE_SEARCH_FIELD,
  REQUEST_KITTENS_PENDING,
  REQUEST_KITTENS_SUCCESS,
  REQUEST_KITTENS_FAILED,
} from "./constants.js";

import * as reducers from "./reducers";

describe("searchKittens", () => {
  const initialStateSearch = {
    searchField: "",
  };

  it("should return the initial state", () => {
    expect(reducers.searchKittens(undefined, {})).toEqual({ searchField: "" });
  });

  it("should handle CHANGE_SEARCHFIELD", () => {
    expect(
      reducers.searchKittens(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: "abc",
      })
    ).toEqual({
      searchField: "abc",
    });
  });
});

describe("requestKittens", () => {
  const initialStateKittens = {
    isPending: false,
    kittens: [],
    error: "",
  };

  it("should return the initial state", () => {
    expect(reducers.requestKittens(undefined, {})).toEqual(initialStateKittens);
  });

  it("sould handle REQUEST_KITTENS_PENDING action", () => {
    expect(
      reducers.requestKittens(initialStateKittens, {
        type: REQUEST_KITTENS_PENDING,
      })
    ).toEqual({
      isPending: true,
      kittens: [],
      error: "",
    });
  });

  it("sould handle REQUEST_KITTENS_SUCCESS action", () => {
    expect(
      reducers.requestKittens(initialStateKittens, {
        type: REQUEST_KITTENS_SUCCESS,
        payload: [
          {
            id: "123",
            name: "test",
            email: "test@gmail.com",
          },
        ],
      })
    ).toEqual({
      isPending: false,
      kittens: [
        {
          id: "123",
          name: "test",
          email: "test@gmail.com",
        },
      ],
      error: "",
    });
  });

  it("sould handle REQUEST_KITTENS_FAILED action", () => {
    expect(
      reducers.requestKittens(initialStateKittens, {
        type: REQUEST_KITTENS_FAILED,
        payload: "NOOOO!!!!",
      })
    ).toEqual({
      isPending: false,
      kittens: [],
      error: "NOOOO!!!!",
    });
  });
});
