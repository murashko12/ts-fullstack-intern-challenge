import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import { useFavorites } from "../context/FavoritesContext"

interface IProps {
  id: string
  url: string
}

const CatCard = ({id, url}: IProps) => {
    
    const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()
    const favorite = isFavorite(id)

    const handleFavoriteClick = () => {
        if (favorite) {
            removeFromFavorites(id)
        } else {
            addToFavorites({ id, url })
        }
    }

    return (
        <div className="flex flex-col items-center relative group hover:shadow-[0_9px_18px_0_rgba(0,0,0,0.18),0_6px_5px_0_rgba(0,0,0,0.24)]">
            <div 
                className="w-[225px] h-[225px] bg-cover bg-center bg-no-repeat transition-all duration-300 ease-in-out group-hover:scale-105"
                style={{ backgroundImage: `url(${url})` }}
            />
            <button 
                onClick={handleFavoriteClick}
                className={`cursor-pointer px-4 py-2 rounded-md mt-2 text-[#F24E1E] absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-0 text-[12px]`}
            >
                {favorite ? <MdOutlineFavorite size={48} /> : <MdOutlineFavoriteBorder size={48} />}
            </button>
        </div>
    )
}

export default CatCard