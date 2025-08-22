import { useState } from "react";

export default function SearchFilter({ onFilter }) {
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [floors, setFloors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ beds, baths, floors });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 shadow-md p-4 rounded-lg flex gap-4 items-end mb-6"
    >
      <div>
        <label className="block text-sm">Bedrooms</label>
        <input
          type="number"
          value={beds}
          onChange={(e) => setBeds(e.target.value)}
          className="border px-2 py-1 rounded w-20"
        />
      </div>
      <div>
        <label className="block text-sm">Bathrooms</label>
        <input
          type="number"
          value={baths}
          onChange={(e) => setBaths(e.target.value)}
          className="border px-2 py-1 rounded w-20"
        />
      </div>
      <div>
        <label className="block text-sm">Floors</label>
        <input
          type="number"
          value={floors}
          onChange={(e) => setFloors(e.target.value)}
          className="border px-2 py-1 rounded w-20"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Filter
      </button>
    </form>
  );
}
