
import { useState } from "react";
import { debounce } from "@/utils/debounce";

export function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  // Wrap onSearch in debounce
  const handleSearch = debounce((query) => {
    onSearch(query);
  }, 400);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        handleSearch(e.target.value);
      }}
      placeholder="Search house plans, styles, keywords..."
      className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
    />
  );
}
