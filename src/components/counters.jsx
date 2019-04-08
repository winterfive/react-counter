import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 3 },
      { id: 4, value: 0 },
      { id: 5, value: 12 }
    ]
  };

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
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {/* The prop values are passed to individual counters here */}
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={
              counter
            } /* Passing counter as an object w/ all its props */
          />
        ))}
      </div>
    );
  }
}

export default Counters;
