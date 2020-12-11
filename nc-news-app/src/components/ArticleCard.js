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
          <Voter type={'articles'} id={article_id} votes={votes}/>
        </div>
        <div className="content">
          <Link key={article_id} to={`/article/${article_id}`}>
            <h3>{title}</h3>
          </Link>
          <p>article body here</p>
          <div className="card-info">
            <p>{comment_count} comments</p>
            <p>
              posted on /{topic} by {author}
            </p>
            <small>{moment(created_at).format("MMM Do YYYY, h:mm a")}</small>
          </div>
        </div>
      </li>
    );
  }
}

export default ArticleCard;
