import { useContext } from "react";
import PostContext from "../../context/postContext";
import "./index.css";

const CreatePostForm = (props) => {
  const { history } = props;
  const {
    postTitle,
    postContent,
    handleTitleChange,
    handleContentChange,
    createPost,
  } = useContext(PostContext);

  const handleSubmit = (event) => {
    createPost(event);
    history.push("/");
  };

  const onChangeOfTitle = (event) => {
    handleTitleChange(event.target.value);
  };

  const onChangeOfContent = (event) => {
    handleContentChange(event.target.value);
  };

  return (
    <div className="create-post-route">
      <div className="create-post">
        <h3 className="create-post-heading">Create a New Post</h3>
        <form className="create-post-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Post Title</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={postTitle}
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
              value={postContent}
              onChange={onChangeOfContent}
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostForm;
