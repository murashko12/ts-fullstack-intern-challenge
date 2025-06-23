import { useCallback, useEffect, useState } from "react"
import axios from 'axios'

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
                        "x-api-key": "live_e5Uk7H2oOKJ1XjigXIXa6y5XUe5XemLYvRQV7IWj0vfbKbFfmRk8vepsGdgg6iXr",
                    },
                    timeout: 10000
                }
            )
            if (response.data.length === 0) {
                setHasMore(false);
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
            if (
                window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading
            ) {
                return
            }
            fetchCats()
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [fetchCats, isLoading])

    return (
        <div className="w-full grid grid-cols-[repeat(5,minmax(0,1fr))] gap-4 p-4">
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : cats.length > 0 ? (
                cats.map((cat) => (
                  <img
                    key={cat.id}
                    src={cat.url}
                    alt="Random cat"
                    className="w-full h-48 object-cover"
                  />
                ))
                ) : (
                    <p>Loading cats...</p>
                )
            }
        </div>
    )
}

export default AllCatsPage
