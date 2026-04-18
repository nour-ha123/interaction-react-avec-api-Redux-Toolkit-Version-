import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../redux/postsreducer";
import PostDetails from "./PostDetails";

const AllPosts = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(getdata());
  }, [dispatch]);


  return (
    <div className="all-post">
      {Array.isArray(data) &&
        data.map((el) => (
          <PostDetails key={el._id} el={el} />
        ))}
    </div>
  );
};

export default AllPosts;