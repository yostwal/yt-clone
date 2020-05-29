import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    // TODO: Make sure we call callback function from parent component
  };
  render() {
    return (
      <div className="ui segment searchbar">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
