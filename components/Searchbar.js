import { useState } from "react";

import { IoIosSearch } from "react-icons/io";
export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log(`Searching for ${searchTerm}`);
  };
  return (
    <div>
      <div className="ml-20 pb-2">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full h-10 px-4 pr-10 text-sm bg-white border border-gray-300 rounded-lg lg:w-80 focus:outline-none"
            placeholder="      Search term..."
          />
          <button className="absolute left-0 p-3">
            <IoIosSearch />
          </button>
        </div>
        {searchTerm}
      </div>
    </div>
  );
}
