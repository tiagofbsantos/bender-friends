import {
  CHANGE_SEARCH_FIELD,
  REQUEST_KITTENS_PENDING,
  REQUEST_KITTENS_SUCCESS,
  REQUEST_KITTENS_FAILED,
  ADD_KITTEN,
} from "./constants.js";

const initialStateSearch = {
  searchField: "",
};

export const searchKittens = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialStateKittens = {
  isPending: false,
  kittens: [],
  error: "",
};

export const requestKittens = (state = initialStateKittens, action = {}) => {
  switch (action.type) {
    case REQUEST_KITTENS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_KITTENS_SUCCESS:
      return Object.assign({}, state, {
        kittens: action.payload,
        isPending: false,
      });
    case REQUEST_KITTENS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};

export const addKitten = (state = initialStateKittens, action = {}) => {
  switch (action.type) {
    case ADD_KITTEN:
      const kitten = {
        name: action.payload,
      };
      let newKittens = state.kittens.slice();
      newKittens.splice(state.kittens.length, 0, kitten);
      return { ...state, kittens: newKittens };
    default:
      return state;
  }
};
