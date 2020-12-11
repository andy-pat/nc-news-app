import React, { Component } from "react";
import { getComments } from "../api";
import Loading from "./Loading";
import CommentCard from "./CommentCard";
import CommentAdder from './CommentAdder'

class CommentsList extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidMount() {
    const { id } = this.props;
    getComments(id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }

  addComment = (postedComment) => {
    this.setState((currentState) => {
      const newComments = [postedComment, ...currentState.comments]
      const newState = { comments: newComments}
      return newState
    })
  }

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <main>
        <CommentAdder addComment={this.addComment} id={this.props.id}/>
          <ul>
            {comments.map((comment) => {
              return <CommentCard key={comment.comment_id} {...comment} />
             })}
          </ul>
        </main>
      );
    }
  }
}

export default CommentsList;
