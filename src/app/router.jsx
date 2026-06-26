import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'
import HomePage from '@/features/home/HomePage'
import AboutPage from '@/features/about/AboutPage'
import SpaPage from '@/features/spa/SpaPage'
import BeautyCenterPage from '@/features/beauty-center/BeautyCenterPage'
import ClinicPage from '@/features/clinic/ClinicPage'
import MagasinPage from '@/features/magasin/MagasinPage'
import ProductPage from '@/features/magasin/ProductPage'
import BookPage from '@/features/book/BookPage'
import ContactPage from '@/features/contact/ContactPage'
import CartPage from '@/features/cart/CartPage'
import AccountPage from '@/features/account/AccountPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'spa',
        element: <SpaPage />,
      },
      {
        path: 'beauty-center',
        element: <BeautyCenterPage />,
      },
      {
        path: 'clinic',
        element: <ClinicPage />,
      },
      {
        path: 'book',
        element: <BookPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'account',
        element: <AccountPage />,
      },
      {
        path: 'magasin/product/:productId',
        element: <ProductPage />,
      },
      {
        path: 'magasin',
        element: <MagasinPage />,
      },
    ],
  },
])
