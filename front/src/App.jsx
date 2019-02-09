import React, { Component } from 'react'

import Ranker from "./Ranker"
import Appbar from "./Appbar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appbar />
        <Ranker />
      </div>
    );
  }
}

export default App;
