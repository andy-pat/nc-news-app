import React, { Component } from "react";
import moment from "moment";
import Voter from "./Voter";
import { deleteComment } from "../api";

class CommentCard extends Component {
  state = {
    commentDeleted: false,
  };

  handleClick() {
    deleteComment(this.props.comment_id);
    this.setState({ commentDeleted: true });
  }

  render() {
    const { commentDeleted } = this.state;
    const {
      author,
      created_at,
      votes,
      body,
      comment_id,
      loggedInUser,
    } = this.props;
    console.log(this.props.loggedInUser);
    if (commentDeleted) {
      return (
        <h4>
          <i>{author}'s comment deleted</i>;
        </h4>
      );
    }
    return (
      <li className="comment-card">
        <div className="votes">
          <Voter type={"comments"} id={comment_id} votes={votes} />
        </div>
        <div className="card-info">
          <small>
            {author} {votes}points {moment(created_at).fromNow()}
            <button
              onClick={() => {
                this.handleClick(comment_id);
              }}
              disabled={author === loggedInUser ? false : true}
            >
              delete
            </button>
          </small>
          <div className="body">
            <p>{body}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default CommentCard;
