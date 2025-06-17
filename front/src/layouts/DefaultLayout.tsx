import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'

const DefaultLayout = () => {
  return (
    <>
      <Navbar/>
      <Suspense fallback={<Loader />}>
        <main className="pt-28 px-[62px]">
          <Outlet />
        </main>
      </Suspense>
    </>
  )
}

export default DefaultLayout
