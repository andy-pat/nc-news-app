import { useForm } from 'react-hook-form'
import {postComment } from '../api'

const CommentAdder = (props) => {
    const {register, handleSubmit } = useForm();

    const onSubmit = (newComment) => {
        postComment(props.id, newComment)
        .then((postedComment) => {
        props.addComment(postedComment)
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>User:
                <input name="username" ref={register({ required: true})} placeholder="Username" />
            </label>
            <label>Body:
                <textarea name="body" ref={register({ required: true})} placeholder="comment" /> 
            </label>
            <br/>
            <input type="submit" />
        </form>

    );
}

export default CommentAdder;