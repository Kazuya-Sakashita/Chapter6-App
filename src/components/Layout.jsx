/* eslint-disable react/prop-types */
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      {/* ナビゲーションバー */}
      <Navbar />

      {/* 各ページのコンテンツ */}
      <div className="container mx-auto p-4">{children}</div>
    </div>
  );
};

export default Layout;
