import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-5 sm:py-7 fixed top-0 right-0 left-0 shadow-md gap-1 sm:0 z-30">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-3xl">
          Imagekart
        </Link>
      </div>

      <ul className="sm:flex grid text-gray-400 gap-3 sm:gap-5 bold text-[20px] cursor-pointer ">
        <Link to="/about" className="hover:underline hover:text-black">
          About
        </Link>
        <Link to="/contact" className="hover:underline hover:text-black">
          Contact
        </Link>
        <Link to="/login" className="hover:underline hover:text-black">
          Log in
        </Link>
        <Link to="/signup" className="hover:underline hover:text-black">
          Sign Up
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
