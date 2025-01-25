import { Link } from "react-router-dom";
import "./App.css";
import PostCard from "./components/PostCard";
import posts from "./data/posts";
import "./index.css";

function App() {
  return (
    <div>
      {/* 投稿一覧 */}
      <Link to="/">
        <main className="container mx-auto p-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </main>
      </Link>
    </div>
  );
}

export default App;
