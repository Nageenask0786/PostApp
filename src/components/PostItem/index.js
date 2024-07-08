import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdMoreVert } from "react-icons/md";

import "./index.css";
import PostContext from "../../context/postContext";

const PostItem = (props) => {
  const [showOptions, setOptionsView] = useState(false);
  const { postDetails } = props;
  const { id, postTitle, postContent } = postDetails;
  const { deletePost } = useContext(PostContext);

  const toggleOptions = () => {
    setOptionsView(!showOptions);
  };

  const onClickOfDelete = () => {
    deletePost(id);
  };

  return (
    <div className="post-item">
      <div className="flex">
        <h4 className="title">{postTitle}</h4>
       
         <p className="content">{postContent}</p>
        </div> <div>
        <div className="more-icon">
            <button type="button" className="more-btn" onClick={toggleOptions}>
              <MdMoreVert size={30} />
            </button>
            {showOptions && (
              <div className="options">
                <button className="option-btn">
                  <Link to={`/edit/${id}`} className="link">
                    <FaEdit size={20} />
                  </Link>
                </button>
                <button className="option-btn" onClick={onClickOfDelete}>
                  <MdDelete size={20} />
                </button>
              </div>
            )}
          </div>
      </div>
    
    </div>
  );
};

export default PostItem;
