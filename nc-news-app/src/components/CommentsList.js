import React, { Component } from "react";
import { getComments } from "../api";
import Loading from "./Loading";
import Sort from "./Sort";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

class CommentsList extends Component {
  state = {
    comments: [],
    sortby: "created_at",
    order: "desc",
    isLoading: true,
  };

  componentDidMount() {
    const { id } = this.props;
    getComments(id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props;
    const { sortby, order } = this.state;
    const newSortBy = prevState.sortby !== sortby;
    if (newSortBy) {
      this.setState({ isLoading: true });
      getComments(id, sortby, order).then((newComments) => {
        this.setState({ comments: newComments, isLoading: false });
      });
    }
  }

  updateList = (str1, str2) => {
    this.setState({ sortby: str1, order: str2 });
  };

  addComment = (postedComment) => {
    this.setState((currentState) => {
      const newComments = [postedComment, ...currentState.comments];
      const newState = { comments: newComments };
      return newState;
    });
  };

  render() {
    const { loggedInUser } = this.props;
    const { comments, isLoading } = this.state;
    return (
      <main>
        <Sort sort={this.updateList} />
        {isLoading ? (
          <Loading />
        ) : (
          <main>
            <CommentAdder
              addComment={this.addComment}
              id={this.props.id}
              loggedInUser={loggedInUser}
            />
            <ul>
              {comments[0] === undefined ? (
                <p>no comments yet...be the first!</p>
              ) : (
                comments.map((comment) => {
                  return (
                    <CommentCard
                      key={comment.comment_id}
                      {...comment}
                      loggedInUser={loggedInUser}
                    />
                  );
                })
              )}
            </ul>
          </main>
        )}
      </main>
    );
  }
}

export default CommentsList;
