import { Link } from "react-router-dom";
import posts from "../data/posts";
import PostCard from "../components/PostCard";

const PostList = () => {
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
};

export default PostList;
