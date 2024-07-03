import {IoIosSearch} from "react-icons/io"

const SearchBar = () => {
  return (
    <div className="sm:w-[60vw] h-[20vh] overflow-clip sm:rounded-3xl mx-auto flex justify-center ">
      <form className="absolute flex justify-center items-center">
        <input
          className="py-5 px-3 w-[80vw] text-xl sm:text-3xl mx-auto outline-none border-b-2"
          type="text"
          placeholder="Search images..."
          id="search"
          name="search"
        />
        <IoIosSearch className="-ml-10  text-3xl sm:text-5xl hover:text-black text-gray-400 cursor-pointer "/>
      </form>
    </div>
  );
};

export default SearchBar;
