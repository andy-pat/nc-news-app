import React, { Component } from "react";
import moment from "moment";
import { Link } from "@reach/router";
import Voter from "./Voter";
import { deleteArticle } from "../api";

class ArticleCard extends Component {
  state = {
    articleDeleted: false,
    articleAuthor: false,
  };
  componentDidMount() {}

  handleClick() {
    deleteArticle(this.props.article_id);
    this.setState({ articleDeleted: true });
  }
  render() {
    const { articleDeleted } = this.state;
    const {
      title,
      author,
      created_at,
      votes,
      comment_count,
      topic,
      article_id,
      loggedInUser,
    } = this.props;
    if (articleDeleted) {
      return (
        <h3>
          <i>
            "<small>{title}</small>" article Removed
          </i>
        </h3>
      );
    }
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
            /{topic} by {author} |{" "}
            {moment(created_at).format("MMM Do YYYY, h:mm a")} <br />{" "}
            {comment_count} comments
            <button
              onClick={() => {
                this.handleClick(article_id);
              }}
              disabled={author === loggedInUser ? false : true}
            >
              delete
            </button>
          </small>
        </div>
      </li>
    );
  }
}

export default ArticleCard;
