import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { CART_KEY } from "../lib/constants";

const CartContext = createContext(null);

function readCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return { items: [] };
    const data = JSON.parse(raw);
    return data?.items ? data : { items: [] };
  } catch {
    return { items: [] };
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState({ items: [] });

  useEffect(() => {
    setCart(readCart());
  }, []);

  const persist = useCallback((next) => {
    setCart(next);
    localStorage.setItem(CART_KEY, JSON.stringify(next));
  }, []);

  const addItem = useCallback(
    (name, price, qty = 1) => {
      const next = structuredClone(readCart());
      const existing = next.items.find((i) => i.name === name);
      if (existing) existing.qty += qty;
      else next.items.push({ name, price: Number(price), qty });
      persist(next);
    },
    [persist]
  );

  const removeItem = useCallback(
    (name) => {
      const next = { items: readCart().items.filter((i) => i.name !== name) };
      persist(next);
    },
    [persist]
  );

  const updateQty = useCallback(
    (name, qty) => {
      const next = structuredClone(readCart());
      const item = next.items.find((i) => i.name === name);
      if (!item) return;
      if (qty <= 0) next.items = next.items.filter((i) => i.name !== name);
      else item.qty = qty;
      persist(next);
    },
    [persist]
  );

  const clearCart = useCallback(() => persist({ items: [] }), [persist]);

  const itemCount = useMemo(
    () => cart.items.reduce((sum, i) => sum + i.qty, 0),
    [cart.items]
  );

  const subtotal = useMemo(
    () => cart.items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [cart.items]
  );

  const value = useMemo(
    () => ({ cart, addItem, removeItem, updateQty, clearCart, itemCount, subtotal }),
    [cart, addItem, removeItem, updateQty, clearCart, itemCount, subtotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
