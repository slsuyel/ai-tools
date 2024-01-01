
import { Outlet } from 'react-router-dom'
import Header from '../pages/Shared/Header'
import Footer from '../pages/Shared/Footer'


export default function WithOutnavbar() {
  return (
    <main className='primary-bg'>
      <Header />

      <Outlet />

      <Footer />
    </main>
  )
}
