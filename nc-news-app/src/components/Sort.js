import React, { Component } from "react";

class Sort extends Component {
  render() {
    //if statement to switch stirng 'asc'/'desc'
    return (
      <div>
        <button
          onClick={(event) => {
            this.props.sort("votes", "desc");
          }}
        >
          Top
        </button>
        <button
          onClick={(event) => {
            this.props.sort("created_at", "desc");
          }}
        >
          Newest
        </button>
        <button
          onClick={(event) => {
            this.props.sort("created_at", "asc");
          }}
        >
          Oldest
        </button>
        <button
          onClick={(event) => {
            this.props.sort("comment_count", "desc");
          }}
        >
          Hot Topics
        </button>
      </div>
    );
  }
}

export default Sort;
