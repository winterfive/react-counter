import React, { Component } from "react";

class Counter extends Component {
  state = {
    tags: ["tag1", "tag2", "tag3"]
  };

  // Experimental, arrow function automatically inherits the this keyword
  // Doesn't require a constructor
  /* handleIncrement = ()) => {
    this.setState({
      count: this.state.count + 1
    });
  }; */
  componentDidUpdate(prevProps, prevState) {
    console.log("prev props: ", prevProps);
    console.log("prevState: ", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // minimize calls
      // then ajax call for new data from server
    }
  }

  componentWillUnmount() {
    console.log("counter unmount");
    // Clean up timers here
  }

  // helper method
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <div>
        <p>I've got some tags!</p>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag + "key"}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }

  render() {
    console.log("counter rendered");
    return (
      <div>
        <h4>Counter #{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-lg m-2"
        >
          Increment
        </button>
        <button
          onClick={() =>
            this.props.onDelete(this.props.counter.id)
          } /* Raises event */
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* logical and */}
        {this.state.tags.length === 0 && "Create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
