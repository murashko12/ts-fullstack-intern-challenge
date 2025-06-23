import { useFavorites } from "../context/FavoritesContext"

interface IProps {
  id: string
  url: string
}

const CatCard = ({id, url}: IProps) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const favorite = isFavorite(id);

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites({ id, url });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div 
        className="w-[225px] h-[225px] bg-cover bg-center bg-no-repeat transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_9px_18px_0_rgba(0,0,0,0.18),0_6px_5px_0_rgba(0,0,0,0.24)]"
        style={{ backgroundImage: `url(${url})` }}
      />
      <button 
        onClick={handleFavoriteClick}
        className={`px-4 py-2 rounded-md mt-2 ${favorite ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
      >
        {favorite ? 'Удалить из избранного' : 'Добавить в избранное'}
      </button>
    </div>
  )
}

export default CatCard