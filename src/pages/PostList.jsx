import PostCard from "../components/PostCard";
import { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // データの取得開始
        const response = await fetch(
          "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
        );

        // レスポンスがエラーの場合は例外をスロー
        if (!response.ok) {
          throw new Error("データの取得に失敗しました");
        }

        const data = await response.json();
        setPosts(data.posts); // データをステートに保存
      } catch (error) {
        console.error("エラー:", error.message); // エラーをコンソールに表示
      } finally {
        setLoading(false); // ローディング状態を解除
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>読み込み中...</div>;
  }

  return (
    <div>
      {/* 投稿一覧 */}
      <main className="container mx-auto p-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
};

export default PostList;
