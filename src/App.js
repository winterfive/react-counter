import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar.jsx";

import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 3 },
      { id: 4, value: 0 },
      { id: 5, value: 12 }
    ]
  };

  constructor() {
    super();
    console.log("App - constructor");
  }

  componentDidMount() {
    // Ajax calls
    console.log("mounted");
  }

  handleReset = () => {
    const resets = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters: resets
    });
  };

  handleIncrement = counter => {
    const currentCounters = [...this.state.counters];
    const index = currentCounters.indexOf(counter);
    //currentCounters[index] = { ...counter };
    currentCounters[index].value++;
    this.setState({
      counters: currentCounters
    });
  };

  handleDelete = counterId => {
    console.log("delete: ", counterId);
    const newCounters = this.state.counters.filter(c => c.id !== counterId);
    console.log("counters: ", newCounters.length);
    this.setState({
      counters: newCounters
    });
  };

  render() {
    console.log("rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
