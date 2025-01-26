import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white w-full">
      <div className="container mx-auto flex justify-between items-center p-6">
        <h1 className="text-base font-bold">Blog</h1>
        <ul>
          <li className="text-base font-bold">お問い合わせ</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
