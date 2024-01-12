
import { Outlet } from 'react-router-dom'
import Header from '../pages/Shared/Header'
import Footer from '../pages/Shared/Footer'
import CategoryCanvas from '../pages/Shared/CategoryCanvas'
import ChatControl from '../pages/ChatBoat/ChatControl'
import { incrementVisitorCount, getVisitorCount } from '../utilities/analytics.js';
import { useEffect } from 'react'


export default function WithOutnavbar() {
  useEffect(() => {
    incrementVisitorCount();
  }, []);

  const totalVisitors = getVisitorCount();
  console.log(totalVisitors);

  return (
    <main className='primary-bg'>
      <Header />
      <CategoryCanvas />
      <Outlet />
      <ChatControl />
      <Footer />
    </main>
  )
}
