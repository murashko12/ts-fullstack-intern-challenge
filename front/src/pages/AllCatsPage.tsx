import { useCallback, useEffect, useState } from "react"
import axios from 'axios'
import CatCard from "../components/CatCard"

const AllCatsPage = () => {
    const [cats, setCats] = useState<any[]>([])
    const [error, setError] = useState<string | null>(null)
    const [page, setPage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)

    const fetchCats = useCallback(async () => {
        if (isLoading || !hasMore) return
        setIsLoading(true)
        try {
            const response = await axios.get(
                `https://api.thecatapi.com/v1/images/search?limit=15&page=${page}`,
                {
                    headers: {
                        "x-api-key": import.meta.env.VITE_CAT_API_KEY,
                    },
                    timeout: 10000
                }
            )
            if (response.data.length === 0) {
                setHasMore(false)
            } else {
                setCats(prev => [...prev, ...response.data])
                setPage(prev => prev + 1)
            }
        } catch (err) {
            console.error("Ошибка при загрузке котиков:", err)
            setError("Не удалось загрузить котиков. Проверьте интернет или попробуйте позже.")
        } finally {
            setIsLoading(false)
        }
    }, [page, isLoading, hasMore])
    
    useEffect(() => {
        fetchCats()
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement
            if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading && hasMore) {
                fetchCats()
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [fetchCats, isLoading, hasMore])

    return (
        <div className="w-full p-4">
            <div className="grid grid-cols-[repeat(5,minmax(0,1fr))] gap-[52px]">
                {error ? (
                    <p className="text-red-500 col-span-full">{error}</p>
                ) : cats.length > 0 && (
                    cats.map((cat) => (
                        <CatCard
                            key={cat.id}
                            id={cat.id} 
                            url={cat.url}
                        />
                    ))
                )}
            </div>
            
            {isLoading && (
                <div className="w-full text-center py-4">
                    <p>... загружаем еще котиков ...</p>
                </div>
            )}

            {!hasMore && !isLoading && (
                <div className="w-full text-center py-4">
                    <p>Все котики загружены!</p>
                </div>
            )}
        </div>
    )
}

export default AllCatsPage