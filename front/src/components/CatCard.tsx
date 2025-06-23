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
        <div className="flex flex-col items-center relative group">
            <div className="relative overflow-hidden">
                <div className="w-[225px] h-[225px] bg-cover bg-center bg-no-repeat transition-all duration-300 ease-in-out group-hover:scale-105 relative z-10" style={{ backgroundImage: `url(${url})` }}/>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none [background:radial-gradient(circle_at_center,_transparent_0%,_rgba(255,255,255,1)_90%)] backdrop-blur-[2px]"></div>
            </div>
            <button 
                onClick={handleFavoriteClick}
                className={`cursor-pointer p-2  text-[#F24E1E] absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30`}
            >
                {favorite ? <MdOutlineFavorite size={48} /> : <MdOutlineFavoriteBorder size={48} />}
            </button>
        </div>
    )
}

export default CatCard