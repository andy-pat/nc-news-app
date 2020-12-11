import React, { Component } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import Sort from "./Sort";
import ArticleAdder from "./ArticleAdder";

class ArticlesList extends Component {
  state = {
    articles: [],
    sortby: "created_at",
    order: "desc",
    isLoading: true,
  };

  componentDidMount() {
    const { topic_slug } = this.props;
    const { sortby, order } = this.state;
    getArticles(topic_slug, sortby, order).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic_slug } = this.props;
    const { sortby, order } = this.state;
    const newTopic = prevProps.topic_slug !== topic_slug;
    const newSortBy = prevState.sortby !== sortby;
    const newOrder = prevState.order !== order;
    if (newTopic || newSortBy || newOrder) {
      this.setState({ isLoading: true });
      getArticles(topic_slug, sortby, order).then((newData) => {
        this.setState({ articles: newData, isLoading: false });
      });
    }
  }

  updateList = (str1, str2) => {
    this.setState({ sortby: str1, order: str2 });
  };

  addArticle = (postedArticle) => {
    this.setState((currentState) => {
      const newArticles = [postedArticle, ...currentState.articles];
      const newState = { articles: newArticles };
      return newState;
    });
  };

  render() {
    const { articles, isLoading } = this.state;
    const { topic_slug } = this.props;
    return (
      <main>
        <h2>{topic_slug || "All"}</h2>
        <Sort sort={this.updateList} />

        {isLoading ? (
          <Loading />
        ) : (
          <main>
            <ArticleAdder addArticle={this.addArticle} />
            <ul>
              {articles.map((article) => {
                return <ArticleCard key={article.article_id} {...article} />;
              })}
            </ul>
          </main>
        )}
      </main>
    );
  }
}

export default ArticlesList;
