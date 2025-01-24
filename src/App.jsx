import "./App.css";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import posts from "./data/posts";
import "./index.css";

function App() {
  return (
    <div>
      {/* ナビゲーションバーを表示 */}
      <Navbar />

      {/* 投稿一覧 */}
      <main className="container mx-auto p-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
}

export default App;
