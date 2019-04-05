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
        {/* The prop values are passed to individual counters here */}
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
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
