import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestKittens } from "../actions";

import MainPage from "../components/main-page/main-page.component";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchKittens.searchField,
    kittens: state.requestKittens.kittens,
    isPending: state.requestKittens.isPending,
    error: state.requestKittens.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestKittens: () => dispatch(requestKittens()),
  };
};

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
