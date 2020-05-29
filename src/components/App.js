import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

export default class App extends Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        {this.state.videos.length} videos found!
      </div>
    );
  }
}
