import { useEffect, useState } from "react";
import axios from 'axios';

const FavoritesCatsPage = () => {
  const [cats, setCats] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get(
          "https://api.thecatapi.com/v1/images/search?limit=10",
          {
            headers: {
              "x-api-key": "live_e5Uk7H2oOKJ1XjigXIXa6y5XUe5XemLYvRQV7IWj0vfbKbFfmRk8vepsGdgg6iXr",
            },
            timeout: 10000, // Увеличиваем таймаут
          }
        );
        setCats(response.data);
      } catch (err) {
        console.error("Ошибка при загрузке котиков:", err);
        setError("Не удалось загрузить котиков. Проверьте интернет или попробуйте позже.");
      }
    };

    fetchCats();
  }, []);

  return (
    <div className="w-full grid grid-cols-[repeat(5,minmax(0,1fr))] gap-4 p-4">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : cats.length > 0 ? (
        <>{JSON.stringify(cats[0])}</>
        // cats
        // .map((cat) => (
        //   <img
        //     key={cat.id}
        //     src={cat.url}
        //     alt="Random cat"
        //     className="w-full h-48 object-cover rounded-lg"
        //   />
        
        )
    // )
       : (
        <p>Loading cats...</p>
      )}
    </div>
  );
};

export default FavoritesCatsPage;