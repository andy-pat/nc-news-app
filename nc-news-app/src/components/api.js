import axios from 'axios'

export const getTopics = () => {
    return axios
    .get('https://nonu-news.herokuapp.com/api/topics')
    .then(({ data }) => {
        return data.topics
    })
}

export const getArticles = () => {
    return axios
    .get('https://nonu-news.herokuapp.com/api/articles')
    .then (({ data }) => {
        return data.articles
    })
}