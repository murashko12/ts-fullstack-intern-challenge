import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import { FavoritesProvider } from "./context/FavoritesContext"

const Routers = () => {

    // все котики
    const LazyAllCatsPage = lazy( async () => await import('./pages/AllCatsPage'))
    // избранные котики
    const LazyFavoritesCatsPage = lazy( async () => await import('./pages/FavoritesCatsPage'))

    return (
        <FavoritesProvider>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<LazyAllCatsPage />} /> { /* Страница всех котиков */ }
                    <Route path="/favorites" element={<LazyFavoritesCatsPage />} /> { /* Страница избранных котиков */ }
                </Route>
            </Routes>
        </FavoritesProvider>
    )
}

export default Routers
