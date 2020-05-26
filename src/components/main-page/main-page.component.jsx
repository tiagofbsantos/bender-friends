import React, { Component } from "react";

import CardList from "../card-list/card-list.component";
import SearchBox from "../search-box/search-box.component";
import Scroll from "../scroll/scroll.component";
import ErrorBoundary from "../error-boundary/error-boundary.component";
import Header from "../header/header.component";
import CreateKittenButton from "../create-kitten-button/create-kitten-button.component";

import "./main-page.styles.css";

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestKittens();
  }

  filterKittens = () => {
    return this.props.kittens.filter((kitten) => {
      return kitten.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    const { onSearchChange, onAddKitten, isPending } = this.props;

    return isPending ? (
      <h1>Pouring the milk, to lure the kittens. Please wait ...</h1>
    ) : (
      <div className="tc">
        <Header />
        <CreateKittenButton
          addKitten={onAddKitten}
          searchField={this.props.searchField}
        />
        <SearchBox
          searchChange={onSearchChange}
          addKitten={onAddKitten}
          searchField={this.props.searchField}
        />
        <Scroll>
          <ErrorBoundary>
            <CardList kittens={this.filterKittens()} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
