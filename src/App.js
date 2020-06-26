import React, { Component } from "react";
import List from "./components/list";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className="text-center">TODO List</h1>
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
