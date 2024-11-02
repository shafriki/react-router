import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import Comment from "./Comment";

const Comments = () => {
    const comments = useLoaderData()
    return (
        <div>
            <h3>Comments: {comments.length} </h3>
            {
                comments.map(comment =><Comment key={comment.id} comment={comment}></Comment>)
            }
        </div>
    );
};

export default Comments;