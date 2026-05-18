import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import { AppProviders } from "../providers/AppProviders";
import { BookingPage } from "../pages/BookingPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { DashboardPage } from "../pages/DashboardPage";
import { HomePage } from "../pages/HomePage";
import { MarketplacePage } from "../pages/MarketplacePage";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { ServicesPage } from "../pages/ServicesPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <AppProviders>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="book" element={<BookingPage />} />
            <Route path="shop" element={<MarketplacePage />} />
            <Route path="shop/:slug" element={<ProductDetailPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="account" element={<DashboardPage />} />
          </Route>
        </Routes>
      </AppProviders>
    </BrowserRouter>
  );
}
