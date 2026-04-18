import { Routes, Route } from "react-router-dom";
import AllPosts from "../components/AllPosts";
import CreatePost from "../components/CreatePost";
import OnePost from "../components/OnePost";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AllPosts />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/onepost" element={<OnePost />} />
    </Routes>
  );
};

export default AppRoutes;
