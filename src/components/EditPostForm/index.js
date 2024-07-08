import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostContext from "../../context/postContext";
import "./index.css";

const EditPostForm = ({ history }) => {
  const { postsList, handleTitleChange, handleContentChange, updatePost } =
    useContext(PostContext);

  const [title, setPostTitle] = useState("");
  const [content, setPostContent] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const post = postsList.find((post) => post.id === id);
    if (post) {
      setPostTitle(post.postTitle);
      setPostContent(post.postContent);
    }
  }, [id, postsList]);

  const onChangeOfTitle = (event) => {
    setPostTitle(event.target.value);
    handleTitleChange(event.target.value);
  };

  const onChangeOfContent = (event) => {
    setPostContent(event.target.value);
    handleContentChange(event.target.value);
  };

  const savePost = (event) => {
    event.preventDefault();
    const updatedPost = {
      id: id,
      postTitle: title,
      postContent: content,
    };
    updatePost(updatedPost);
    history.push("/");
  };

  return (
    <div className="edit-post-route">
      <div className="edit-post">
        <h3 className="edit-post-heading">Edit Post</h3>
        <form className="edit-post-form" onSubmit={savePost}>
          <div className="form-group">
            <label htmlFor="title">Post Title</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={title}
              onChange={onChangeOfTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Post Content</label>
            <textarea
              id="content"
              name="content"
              rows="5"
              required
              value={content}
              onChange={onChangeOfContent}
            ></textarea>
          </div>
          <button type="submit" className="save-btn">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPostForm;
