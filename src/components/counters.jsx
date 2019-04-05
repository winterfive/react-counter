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
  render() {
    return (
      <div>
        {/* The prop values are passed to individual counters here */}
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} id={counter.id} />
        ))}
      </div>
    );
  }
}

export default Counters;
