import React, { Component } from "react";
import moment from "moment";
import { Link } from "@reach/router";
import Voter from "./Voter";

class ArticleCard extends Component {
  state = {};

  render() {
    const {
      title,
      author,
      created_at,
      votes,
      comment_count,
      topic,
      article_id,
    } = this.props;
    return (
      <li className="article-card">
        <div className="votes">
          <Voter type={"articles"} id={article_id} votes={votes} />
        </div>
        <div className="title">
          <Link key={article_id} to={`/article/${article_id}`}>
            <h3>{title}</h3>
          </Link>
        </div>
        <div className="whitespace"></div>
        <div className="info">
          <small>
            posted on /{topic} by {author}{" "}
            {moment(created_at).format("MMM Do YYYY, h:mm a")} {comment_count}{" "}
            comments
          </small>
        </div>
      </li>
    );
  }
}

export default ArticleCard;
