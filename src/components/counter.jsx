import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 4,
    tags: ["tag1", "tag2", "tag3"]
  };

  constructor() {
    super();
    console.log("constructor", this);
    // this will always access the counter object, need one for each event handler
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement(p) {
    console.log("Increment clicked", this);
    console.log("Name of Product: " + p);
    this.setState({
      count: this.state.count + 1
    });
  }

  // Experimental, arrow function automatically inherits the this keyword
  // Doesn't require a constructor
  /* handleIncrement = p => {
    console.log("Name of Product: " + p);
    this.setState({
      count: this.state.count + 1
    });
  }; */

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

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement("product")}
          className="btn btn-secondary btn-lg m-2"
        >
          Increment
        </button>
        {/* logical and */}
        {this.state.tags.length === 0 && "Create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
