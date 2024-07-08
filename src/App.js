import { Switch, Route } from "react-router-dom";

import { useState } from "react";

import { v4 } from "uuid";

import Posts from "./components/Posts";
import CreatePostForm from "./components/CreatePostForm";

import EditPostForm from "./components/EditPostForm";

import PostContext from "./context/postContext";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const handleTitleChange = (title) => {
    setPostTitle(title);
  };

  const handleContentChange = (content) => {
    setPostContent(content);
  };

  const createPost = (event) => {
    event.preventDefault();
    const newPost = {
      id: v4(),
      postTitle: postTitle,
      postContent: postContent,
    };
    setPostsList((prevstate) => [...prevstate, newPost]);
    setPostTitle("");
    setPostContent("");
  };

  const deletePost = (postId) => {
    const updatedPosts = postsList.filter((post) => post.id !== postId);
    setPostsList(updatedPosts);
  };

  const updatePost = (updatedPost) => {
    const updatedPosts = postsList.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setPostsList(updatedPosts);
  };

  return (
    <PostContext.Provider
      value={{
        postTitle,
        postContent,
        postsList,
        handleContentChange,
        handleTitleChange,
        createPost,
        deletePost,
        updatePost,
      }}
    >
      <div className="App">
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/createpost" component={CreatePostForm} />
          <Route exact path="/edit/:id" component={EditPostForm} />
        </Switch>
      </div>
    </PostContext.Provider>
  );
};

export default App;
