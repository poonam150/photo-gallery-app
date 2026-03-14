import { useState, useCallback } from "react";
import Gallery from "./components/Gallery";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      <h1 className="text-3xl font-bold text-center py-6">
        Photo Gallery
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by author..."
          value={search}
          onChange={handleSearch}
          className="border p-2 rounded w-80"
        />
      </div>

      <Gallery search={search} />

    </div>
  );
}

export default App;
