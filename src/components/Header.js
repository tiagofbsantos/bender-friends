import React, { Component } from "react";
import CounterButton from "./CounterButton";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="f1">Bender Friends</h1>
        <CounterButton color={"red"} />
      </React.Fragment>
    );
  }
}

export default Header;
