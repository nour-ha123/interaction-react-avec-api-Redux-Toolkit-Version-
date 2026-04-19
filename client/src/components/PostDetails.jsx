import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const PostDetails = ({ el }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  if (!el) return null;

  return (
    <div className="blog-list-item">

      <button onClick={() => dispatch(deletePost(el._id))}>
        delete
      </button>

      <button
        onClick={() => nav("/create", { state: { post: el } })}
      >
        edit
      </button>

      <div className="blog-list-item-title">
        {el.title}
      </div>

      <div className="blog-list-item-byline">
        {el.content}
      </div>

      <div className="blog-list-item-lede">
        <img
          src={el.imageUrl}
          alt="no content"
          onClick={() =>
            nav("/onepost", { state: { el } })
          }
        />
      </div>
    </div>
  );
};

export default PostDetails;