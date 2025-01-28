import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white w-full">
      <div className="container mx-auto flex justify-between items-center p-6">
        <Link to="/" className="text-base font-bold">
          Blog
        </Link>
        <ul>
          <Link to="/contact" className="text-base font-bold">
            問い合わせ
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
