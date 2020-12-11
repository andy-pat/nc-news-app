import axios from "axios";

const nonuNewsApi = axios.create({
  baseURL: "https://nonu-news.herokuapp.com/api",
});

export const getTopics = () => {
  return nonuNewsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = (topic_slug, sortby, order) => {
  return nonuNewsApi
    .get("/articles", {
      params: {
        topic: topic_slug,
        sortby,
        order,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticle = (id) => {
  return nonuNewsApi.get(`/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (id, sortby, order) => {
  return nonuNewsApi
    .get(`/articles/${id}/comments`, {
      params: {
        sortby,
        order,
      },
    })
    .then(({ data }) => {
      return data;
    });
};

export const votePatch = (type, id, vote) => {
  return nonuNewsApi
    .patch(`/${type}/${id}`, { inc_votes: vote })
    .then(({ data }) => {
      return data;
    });
};

export const postArticle = (newArticle) => {
  return nonuNewsApi
  .post(`/articles`, newArticle)
  .then(({data}) => {
    return data.article[0]
  })
}

export const postComment = (id, newComment) => {
  return nonuNewsApi
  .post(`/articles/${id}/comments`, newComment)
  .then(({data}) => {
    return data.comment[0]
  })
}