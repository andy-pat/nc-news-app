import { useForm } from "react-hook-form";
import { postArticle } from "../api";

const ArticleAdder = (props) => {
  //could change this into a state so that when the submit is pressed a message appears with the student data that has been added...
  const { register, handleSubmit } = useForm();

  const onSubmit = (newArticle) => {
    newArticle.author = props.loggedInUser;
    console.log(newArticle, props.loggedInUser);
    postArticle(newArticle).then((postedArticle) => {
      props.addArticle(postedArticle);
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <i>({props.loggedInUser})</i> */}

        <select
          className="form-topic"
          id="topic"
          name="topic"
          ref={register({ required: true })}
        >
          <option value="" disabled selected>
            Select topic
          </option>
          <option>coding</option>
          <option>cooking</option>
          <option>football</option>
        </select>
        <br />

        <textarea
          className="form-title"
          name="title"
          ref={register({ required: true })}
          placeholder="Title"
        />

        <br />
        <textarea
          className="form-body"
          name="body"
          ref={register({ required: true })}
          placeholder="Text"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ArticleAdder;
