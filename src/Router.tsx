import { Route, Routes } from "react-router-dom";
import { Home } from "./Page/Home";
import { Post } from "./Page/Post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  );
}
