import React, { Component } from "react";
import CounterButton from "../counter-button/counter-button.component";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="f1">Kitten Generator</h1>
        <CounterButton color={"red"} />
      </React.Fragment>
    );
  }
}

export default Header;
