import { Link } from "@reach/router";
import React, { Component } from "react";
import { getTopics } from "../api";

class Nav extends Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    getTopics().then((topics) => {
      this.setState({ topics });
    });
  }
  render() {
    const { topics } = this.state;
    return (
      <nav className="nav-button">
        {topics.map((topic) => (
          <button key={topic.slug} >
            <Link to={`/topics/${topic.slug}`}>
              {topic.slug}
            </Link>
          </button>
        ))}
        {/* <ul>
          {this.state.topics.map((topic) => (
            <li>{topic.slug}</li>
          ))}
        </ul> */}
      </nav>
    );
  }
}

export default Nav;
