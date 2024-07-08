import { useContext } from "react";

import { Link } from "react-router-dom";

import PostContext from "../../context/postContext";

import "./index.css";
import PostItem from "../PostItem";

const Posts = () => {
  const { postsList } = useContext(PostContext);

  const renderPosts = () => {
    return (
      <ul className="posts-container">
        {postsList.map((each) => (
          <PostItem key={each.id} postDetails={each} />
        ))}
      </ul>
    );
  };

  const renderNoPostsView = () => (
    <div className="no-posts-view">
      <h1 className="no-posts-heading">No Posts</h1>
    </div>
  );

  return (
    <div className="posts-app">
      <div className="container">
        <div className="heading-container">
          <h1>Posts</h1>
        </div>
        <div className="create-post-container">
          <h2>Click on the button to create a new post</h2>
          <Link to="/createpost">
            <button type="button" className="create-post-btn">
              Create Post
            </button>
          </Link>
        </div>
        {postsList.length > 0 ? renderPosts() : renderNoPostsView()}
      </div>
    </div>
  );
};

export default Posts;
