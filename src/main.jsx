import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import posts from "./data/posts.js";
import Layout from "./components/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          {/* 記事詳細ページ */}
          <Route path="/posts/:id" element={<PostDetail posts={posts} />} />
        </Routes>
      </Layout>
    </Router>
  </StrictMode>
);
