import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestKittens, addKitten } from "../actions";

import MainPage from "../components/main-page/main-page.component";

/* reducers */
const mapStateToProps = (state) => {
  return {
    searchField: state.searchKittens.searchField,
    kittens: state.requestKittens.kittens
      .concat(state.addKitten.kittens)
      .reverse(),
    isPending: state.requestKittens.isPending,
    error: state.requestKittens.error,
  };
};

/* actions */
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestKittens: () => dispatch(requestKittens()),
    onAddKitten: (kittenName) => dispatch(addKitten(kittenName)),
  };
};

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
