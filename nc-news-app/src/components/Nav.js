import { Link } from "@reach/router";
import React, { Component } from "react";
import { getTopics } from "./api";

class Nav extends Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    getTopics().then((topics) => {
      this.setState({ topics});
    });
  }
  render() {
    return (
      <nav>
        <ul>
          <h3>Topics</h3>
          {this.state.topics.map((topic) => (
            <li>{topic.slug}</li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
