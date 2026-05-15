import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();
const STORAGE_KEY = "foodcompare_favorites";


// inzio comn lo stato per i preferiti
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

// useffect salvare i cambiamenbti in favorites
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

// controllo se ci sono doppioni  
  function isFavorite(id) {
    return favorites.some((food) => food.id === id);
  }


// aggiungo o tolgo favoriti  
  function toggleFavorite(food) {
    setFavorites((currentFavorites) => {
      if (currentFavorites.some((item) => item.id === food.id)) {
        return currentFavorites.filter((item) => item.id !== food.id);
      }

      return [...currentFavorites, food];
    });
  }


  // provider
  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}


// hook piu clean
export function useFavorites() {
  return useContext(FavoritesContext);
}
