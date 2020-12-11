import { useForm } from "react-hook-form"
import { postArticle } from "../api"

const ArticleAdder = (props) => {
  //could change this into a state so that when the submit is pressed a message appears with the student data that has been added...
  const { register, handleSubmit } = useForm();

  const onSubmit = (newArticle) => {
      
    postArticle(newArticle).then((postedArticle) => {
        props.addArticle(postedArticle);
    })
  }
    
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <label>User:
        <input name="author" ref={register({ required: true})} placeholder="Username" />
      </label>
      <label>Topic:
        <input name="topic" ref={register({ required: true})} placeholder="Topic" />
      </label>
      <label>Title:
        <input name="title" ref={register({ required: true})} placeholder="Article title" />
      </label>
      <br/>
      <label>body:
      <textarea name="body" ref={register({ required: true})} placeholder="article body" />
      </label>
      <br/>
      <input type="submit" />
    </form>
  );
}

export default ArticleAdder;