
import React from 'react';

const ArticleCard = (props) => {
    console.log(props)
    const { title, author, created_at, topic, votes, comment_count } = props
    return (
        <container>
            <li className="article-card">
                <h3>{title}</h3>
                <ul>
                    <li>{author}</li>
                    <li>{created_at}</li>
                    <li>{comment_count}</li>
                    <li>{votes}</li>
                </ul>
            </li>
        </container>
    );
};

export default ArticleCard;