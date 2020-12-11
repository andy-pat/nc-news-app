import React, { Component } from "react";
import moment from "moment";
import Voter from './Voter'

class ArticleCard extends Component {
  state = {};
  //   article_id: 13
  //   author: "grumpy19"
  //   body: "Beatae labore et voluptatem aut iure. Labore cum tempore eaque cum. Doloribus omnis neque nihil odio ipsum dolore voluptates."
  //   comment_id: 163
  //   created_at: "2016-08-16T00:00:00.000Z"
  //   votes: 11
  render() {
    const { author, created_at, votes, body, comment_id } = this.props;

    return (
      <li className="comment-card">
      <div className="votes">
      <Voter type={'comments'} id={comment_id} votes={votes}/>
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
