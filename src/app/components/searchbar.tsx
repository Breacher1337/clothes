import { useState, useRef, useEffect } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

export default function SearchBarWithFilter() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All"); // Default value is "All"
  const [showFilter, setShowFilter] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowFilter(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <form className="flex items-center w-full max-w-md mx-auto p-2 relative rounded-full border border-gray-300 shadow-sm bg-white">
        {/* Filter Button */}
        <div className="relative border-r border-gray-300" ref={dropdownRef}>
          <button
            type="button"
            className="p-3 bg-white text-gray-900 flex items-center gap-2"
            onClick={() => setShowFilter(!showFilter)}
          >
            <FaFilter />
            <span>{filter}</span> {/* Display selected filter */}
          </button>
          {showFilter && (
            <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg z-[9999]">
              <ul className="py-2 text-gray-900">
                {["All", "Headgear", "Top", "Bottoms", "Accessories"].map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      setFilter(item);
                      setShowFilter(false);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 pl-4 pr-10 rounded-full text-gray-900 focus:outline-none "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <FaSearch className=" text-2xl absolute right-3 top-3 text-gray-900" />
        </div>
      </form>
    </div>
  );
}
