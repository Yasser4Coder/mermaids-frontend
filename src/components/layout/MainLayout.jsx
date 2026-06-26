import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/layout/ScrollToTop'
import { AccountProvider } from '@/context/AccountContext'
import { CartProvider } from '@/context/CartContext'

export default function MainLayout() {
  return (
    <AccountProvider>
      <CartProvider>
        <div className="flex min-h-svh flex-col">
          <ScrollToTop />
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AccountProvider>
  )
}
