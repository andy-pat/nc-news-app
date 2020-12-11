import React, { Component } from "react";
import moment from "moment";
import Voter from "./Voter";

class ArticleCard extends Component {
  state = {};

  render() {
    const { author, created_at, votes, body, comment_id } = this.props;

    return (
      <li className="comment-card">
        <div className="votes">
          <Voter type={"comments"} id={comment_id} votes={votes} />
        </div>
        <div className="card-info">
          <div className="content">
            <p>{body}</p>
          </div>
          <p>
            {author} {votes}points {moment(created_at).fromNow()}
          </p>
        </div>
      </li>
    );
  }
}

export default ArticleCard;
