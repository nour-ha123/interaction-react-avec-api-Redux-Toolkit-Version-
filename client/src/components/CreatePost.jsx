import { useState } from "react";
import { useDispatch } from "react-redux";
import { addpost } from "../redux/postsreducer";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const add = (e) => {
    e.preventDefault();

    dispatch(
      addpost({
        title: title,
        content: content,
        imageUrl: imageUrl,
      })
    );
    nav("/");
  };

  return (
    <div className="blog-list-item">
      <h1 className="New-Post-Title">New Post</h1>

      <form className="New-Post-Form" onSubmit={add}>
        
        <input
          type="text"
          className="search"
          placeholder="Title"
          required
          minLength="3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="post"
          placeholder="Content..."
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <textarea
          className="post"
          placeholder="Image..."
          required
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <button className="btn btn-secondary searchButton" type="submit">
          publish
        </button>
      </form>
    </div>
  );
}

export default CreatePost;