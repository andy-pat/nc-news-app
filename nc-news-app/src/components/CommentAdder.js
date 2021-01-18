import { useForm } from "react-hook-form";
import { postComment } from "../api";
import React, { useState } from "react";

const CommentAdder = (props) => {
  const { register, handleSubmit } = useForm();
  const [comment, setComment] = useState("");
  const [commented, setCommented] = useState(false);

  const onSubmit = (newComment) => {
    console.log(newComment);
    setComment(newComment.body);
    setCommented(true);
    postComment(props.id, newComment).then((postedComment) => {
      props.addComment(postedComment);
    });
  };
  console.log(props.loggedInUser);
  if (commented) {
    return <p>"{comment}" ...comment posted! </p>;
  } else {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="comment-box">
        <small>
          <i>commenting as;</i> {props.loggedInUser}
          <br></br>
        </small>
        <label>
          Body:
          <textarea
            name="body"
            ref={register({ required: true })}
            placeholder="comment"
          />
        </label>
        <br />
        <input type="submit" />
      </form>
    );
  }
};

export default CommentAdder;
