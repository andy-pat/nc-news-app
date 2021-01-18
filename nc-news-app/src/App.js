import React from "react";
import "./App.css";
import Header from "../src/components/Header";
import { Router } from "@reach/router";
import Nav from "./components/Nav";
import ArticlesList from "./components/ArticlesList";
import Article from "./components/Article";
import ErrorMessage from "./components/ErrorMessage";

class App extends React.Component {
  state = {
    loggedInUser: "grumpy19",
  };

  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <Header loggedInUser={loggedInUser} />
        <Nav />
        <Router>
          <ArticlesList path="/" loggedInUser={loggedInUser} />
          <ArticlesList
            path="/topics/:topic_slug"
            loggedInUser={loggedInUser}
          />
          <Article path="/article/:id" loggedInUser={loggedInUser} />
          <ErrorMessage default />
        </Router>
      </div>
    );
  }
}

export default App;
