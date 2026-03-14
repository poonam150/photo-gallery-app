export const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || []
};

export function favoritesReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      const exists = state.favorites.find(
        (photo) => photo.id === action.payload.id
      );

      let updatedFavorites;

      if (exists) {
        updatedFavorites = state.favorites.filter(
          (photo) => photo.id !== action.payload.id
        );
      } else {
        updatedFavorites = [...state.favorites, action.payload];
      }

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      return { favorites: updatedFavorites };

    default:
      return state;
  }
}