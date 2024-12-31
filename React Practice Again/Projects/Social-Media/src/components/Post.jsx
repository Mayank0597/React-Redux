import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div>
      <div className="card post_card" style={{ width: "30rem" }}>
        <div className="card-body">
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>

          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hashTag">
              {tag}
            </span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            This post has been liked by {post.reactions.likes} people.
          </div>
          <div className="alert alert-success reactions" role="alert">
            This post has been disliked by {post.reactions.dislikes} people.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
