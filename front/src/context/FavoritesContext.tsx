import { createContext, useContext, useState } from 'react';

interface Cat {
  id: string
  url: string
}

interface FavoritesContextType {
    favorites: Cat[];
    addToFavorites: (cat: Cat) => void;
    removeFromFavorites: (id: string) => void;
    isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Cat[]>([]);

  const addToFavorites = (cat: Cat) => {
    setFavorites(prev => [...prev, cat]);
  };

  const removeFromFavorites = (id: string) => {
    setFavorites(prev => prev.filter(cat => cat.id !== id));
  };

  const isFavorite = (id: string) => {
    return favorites.some(cat => cat.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}