import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostCard = ({ post, isDetail = false }) => {
  // 日付をフォーマットする関数
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  };

  // カード内容（共通部分）
  const content = (
    <>
      {/* 上部のレイアウト: 日付を左側、カテゴリを右側に表示 */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-gray-500">{formatDate(post.createdAt)}</p>
        <div className="flex flex-wrap gap-2">
          {post.categories.map((category, index) => (
            <span
              key={index}
              className="text-sm text-blue-700 px-2 py-1 rounded border border-blue-700"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* タイトル */}
      <h2 className="text-2xl mt-4 mb-2 truncate text-left">{post.title}</h2>

      {/* 内容 */}
      {/* 詳細表示の場合は、コンテントを全て表示させる */}
      <p className={`text-gray-600 mt-2 ${isDetail ? "" : "line-clamp-2"}`}>
        {post.content}
      </p>
    </>
  );

  // リンクの有無で構造を切り替える
  return (
    <div className={`bg-white ${isDetail ? "" : " p-4 border mt-8"}`}>
      {isDetail ? (
        // リンクを無効時の場合
        <div>{content}</div>
      ) : (
        // リンク有効時の構造
        <Link to={`/posts/${post.id}`} className="block">
          {content}
        </Link>
      )}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired, // post の ID は必須
    title: PropTypes.string.isRequired, // post のタイトルは必須
    content: PropTypes.string.isRequired, // post の内容は必須
    createdAt: PropTypes.string.isRequired, // 日付は ISO 文字列として必須
    categories: PropTypes.arrayOf(PropTypes.string), // categories は文字列配列（任意）
  }).isRequired,
  isDetail: PropTypes.bool, // isDetail はオプションで boolean 型
};
export default PostCard;
