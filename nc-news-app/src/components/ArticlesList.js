import React, { Component } from 'react';
import { getArticles } from './api'
import ArticleCard from './ArticleCard'


class ArticlesList extends Component {
    state = {
        articles : []
    }
    componentDidMount() {
        getArticles().then((articles) => {
            this.setState({ articles })
        })
    }


    render() {
        const { articles } = this.state;
        return (
            <main>
            <ul>
            {articles.map((article) => {
                return (
                 <ArticleCard 
                 key={article.article_id}
                 {...article} 
                 />  
                )
            })}
            
               
                </ul>
            </main>
        );
    }
}

export default ArticlesList;