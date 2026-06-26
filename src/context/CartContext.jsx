import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'mermaids-cart'

const CartContext = createContext(null)

function loadCart() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function buildCartKey(productId, color) {
  return `${productId}-${color || 'default'}`
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  )

  function addItem(product, { quantity = 1, color = '' } = {}) {
    const cartKey = buildCartKey(product.id, color)

    setItems((current) => {
      const existing = current.find((item) => item.cartKey === cartKey)

      if (existing) {
        return current.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          cartKey,
          productId: product.id,
          title: product.title,
          price: product.price,
          priceLabel: product.priceLabel,
          image: product.image,
          color,
          quantity,
        },
      ]
    })
  }

  function removeItem(cartKey) {
    setItems((current) => current.filter((item) => item.cartKey !== cartKey))
  }

  function updateQuantity(cartKey, quantity) {
    if (quantity < 1) {
      removeItem(cartKey)
      return
    }

    setItems((current) =>
      current.map((item) => (item.cartKey === cartKey ? { ...item, quantity } : item)),
    )
  }

  function clearCart() {
    setItems([])
  }

  const value = {
    items,
    itemCount,
    subtotal,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}

export function formatPrice(amount) {
  return `${amount.toLocaleString('fr-DZ')} DA`
}
