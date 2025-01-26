import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Layout from "./components/Layout";
import PostDetail from "./pages/PostDetail";
import PostList from "./pages/PostList";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<PostList />} />
            {/* 記事詳細ページ */}
            <Route path="/posts/:id" element={<PostDetail />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
