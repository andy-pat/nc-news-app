import React, { Component } from "react";
import { getArticle } from "../api";
import Loading from "./Loading";
import moment from "moment";
import CommentsList from "./CommentsList";
import Voter from "./Voter";

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
  };
  //pass title on props?
  componentDidMount() {
    const { id } = this.props;
    getArticle(id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  }

  render() {
    const { article, isLoading } = this.state;
    const { id, loggedInUser } = this.props;
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <main>
          <div className="article-card">
            <div className="votes">
              <Voter type={"articles"} id={id} votes={article.votes} />
            </div>
            <div className="body">
              <h2>{article.title}</h2>
              <p>{article.body}</p>
              <div className="card-info">
                <small>
                  {moment(article.created_at).format("MMMM Do YYYY, h:mm:ss a")}{" "}
                </small>
              </div>
            </div>
          </div>
          <CommentsList key={id} id={id} loggedInUser={loggedInUser} />
        </main>
      );
    }
  }
}

export default Article;
