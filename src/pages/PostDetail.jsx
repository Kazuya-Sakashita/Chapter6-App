import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import { useEffect, useState } from "react";

const PostDetail = () => {
  const { id } = useParams(); // URL パラメータから ID を取得
  const [post, setPost] = useState(null); // 初期値を null に設定
  const [error, setError] = useState(null); // エラー状態を管理
  const [loading, setLoading] = useState(true); // 読み込み中の状態を管理

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true); // 読み込み中の状態を設定
        const response = await fetch(
          `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}` // ID を埋め込む
        );
        if (!response.ok) {
          throw new Error("記事の取得に失敗しました");
        }
        const data = await response.json();
        setPost(data.post); // データをステートに保存
      } catch (err) {
        setError(err.message); // エラーをステートに保存
      } finally {
        setLoading(false); // 読み込み中の状態を解除
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <p className="text-left text-gray-700 p-4">読み込み中...</p>; // 読み込み中の表示
  }

  if (error) {
    return <p className="text-left text-red-500 p-4">エラー: {error}</p>; // エラーが発生した場合の表示
  }

  if (!post) {
    return <p>記事が見つかりません。</p>; // 該当記事がない場合の表示
  }

  return (
    <div className="container mx-auto p-4">
      {/* サムネイル画像 */}
      <img src={post.thumbnailUrl} alt={post.title} className="w-full h-auto" />

      {/* 本文(Cardを利用) */}
      <div className="container mx-auto p-4">
        <PostCard post={post} isDetail={true} />
      </div>
    </div>
  );
};

export default PostDetail;
