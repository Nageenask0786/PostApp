import React from "react";

const PostContext = React.createContext({
  postTitle: "",
  postContent: "",
  postsList: [],
  handleTitleChange: () => {},
  handleContentChange: () => {},
  createPost: () => {},
  deletePost: () => {},
  updatePost: () => {},
});

export default PostContext;
