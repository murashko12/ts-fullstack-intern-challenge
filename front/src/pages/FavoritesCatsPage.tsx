import { useFavorites } from '../context/FavoritesContext'
import CatCard from '../components/CatCard'

const FavoritesCatsPage = () => {
    const { favorites } = useFavorites()

    return (
        <div className="w-full p-4">
            {favorites.length === 0 ? (
                <p className="text-center text-gray-500">У вас пока нет избранных котиков</p>
            ) : (
                <div className="grid grid-cols-[repeat(5,minmax(0,1fr))] gap-[52px]">
                {favorites.map(
                        (cat) => (
                            <CatCard
                                key={cat.id}
                                id={cat.id}
                                url={cat.url}
                            />
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default FavoritesCatsPage