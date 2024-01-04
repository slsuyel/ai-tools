
import { Outlet } from 'react-router-dom'
import Header from '../pages/Shared/Header'
import Footer from '../pages/Shared/Footer'
import CategoryCanvas from '../pages/Shared/CategoryCanvas'


export default function WithOutnavbar() {
  return (
    <main className='primary-bg'>
      <Header />
      <CategoryCanvas />
      <Outlet />

      <Footer />
    </main>
  )
}
