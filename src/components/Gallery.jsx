import { useReducer, useMemo } from "react";
import { favoritesReducer, initialState } from "../reducer/favoritesReducer";
import { useFetchPhotos } from "../hooks/useFetchPhotos";

function Gallery({ search }) {
  const { photos, loading, error } = useFetchPhotos();
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [photos, search]);

  if (loading) return <p className="text-center mt-10">Loading photos...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {filteredPhotos.map((photo) => {
        const isFavorite = state.favorites.some(
          (fav) => fav.id === photo.id
        );

        return (
          <div
         key={photo.id}
        className={`bg-white shadow rounded p-2 ${
         isFavorite ? "border-2 border-red-400" : ""
           }`}
>
           <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-48 object-cover rounded"
         />

            <div className="flex justify-between items-center mt-2">
              <p className="text-sm font-semibold">{photo.author}</p>

              <button
                onClick={() =>
                  dispatch({ type: "TOGGLE_FAVORITE", payload: photo })
                }
                className="text-red-500 text-xl"
              >
                {isFavorite ? "❤️" : "🤍"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;