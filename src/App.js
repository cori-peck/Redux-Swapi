import React, { Component } from "react";

import { CharacterListView } from "./views";
import "./styles/App.css";

class App extends Component {

componentDidMount() {
  console.log("inside CDM");
}

  render() {
    return <CharacterListView />;
  }
}

export default App;
