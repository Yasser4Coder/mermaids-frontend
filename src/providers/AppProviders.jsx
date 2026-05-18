import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";
import { LangProvider } from "../context/LangContext";

export function AppProviders({ children }) {
  return (
    <LangProvider>
      <AuthProvider>
        <CartProvider>{children}</CartProvider>
      </AuthProvider>
    </LangProvider>
  );
}
