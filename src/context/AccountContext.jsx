import { createContext, useContext, useEffect, useState } from 'react'
import { demoAppointments, demoOrders, demoUser } from '@/data/account'

const USERS_KEY = 'mermaids-users'
const SESSION_KEY = 'mermaids-session'
const ORDERS_KEY = 'mermaids-orders'
const BOOKINGS_KEY = 'mermaids-bookings'

const AccountContext = createContext(null)

function loadJson(key, fallback) {
  try {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : fallback
  } catch {
    return fallback
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

function sanitizeUser(user) {
  const { password: _, ...safe } = user
  return safe
}

function seedDemoData() {
  const users = loadJson(USERS_KEY, [])
  if (users.some((user) => user.email === demoUser.email)) return

  const seededUser = {
    ...demoUser,
    password: 'demo123',
  }

  saveJson(USERS_KEY, [...users, seededUser])
  saveJson(ORDERS_KEY, { ...loadJson(ORDERS_KEY, {}), [demoUser.id]: demoOrders })
  saveJson(BOOKINGS_KEY, { ...loadJson(BOOKINGS_KEY, {}), [demoUser.id]: demoAppointments })
}

function getSessionUser() {
  const sessionId = localStorage.getItem(SESSION_KEY)
  if (!sessionId) return null

  const users = loadJson(USERS_KEY, [])
  const user = users.find((item) => item.id === sessionId)
  return user ? sanitizeUser(user) : null
}

export function AccountProvider({ children }) {
  const [user, setUser] = useState(getSessionUser)
  const [orders, setOrders] = useState([])
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    seedDemoData()
  }, [])

  useEffect(() => {
    if (!user) {
      setOrders([])
      setAppointments([])
      return
    }

    const allOrders = loadJson(ORDERS_KEY, {})
    const allBookings = loadJson(BOOKINGS_KEY, {})
    setOrders(allOrders[user.id] ?? [])
    setAppointments(allBookings[user.id] ?? [])
  }, [user])

  function login(email, password) {
    const users = loadJson(USERS_KEY, [])
    const match = users.find(
      (item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password,
    )

    if (!match) {
      return { success: false, error: 'Invalid email or password.' }
    }

    localStorage.setItem(SESSION_KEY, match.id)
    setUser(sanitizeUser(match))
    return { success: true }
  }

  function register({ fullName, email, phone, password }) {
    const users = loadJson(USERS_KEY, [])

    if (users.some((item) => item.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, error: 'An account with this email already exists.' }
    }

    if (password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters.' }
    }

    const newUser = {
      id: createId('user'),
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      address: '',
      memberSince: new Date().toISOString().slice(0, 10),
      password,
    }

    saveJson(USERS_KEY, [...users, newUser])
    localStorage.setItem(SESSION_KEY, newUser.id)
    setUser(sanitizeUser(newUser))
    return { success: true }
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
  }

  function updateProfile(updates) {
    if (!user) return { success: false, error: 'Not signed in.' }

    const users = loadJson(USERS_KEY, [])
    const nextUsers = users.map((item) =>
      item.id === user.id
        ? {
            ...item,
            fullName: updates.fullName?.trim() ?? item.fullName,
            phone: updates.phone?.trim() ?? item.phone,
            address: updates.address?.trim() ?? item.address,
          }
        : item,
    )

    saveJson(USERS_KEY, nextUsers)
    const updated = nextUsers.find((item) => item.id === user.id)
    setUser(sanitizeUser(updated))
    return { success: true }
  }

  function addOrder({ items, subtotal, shipping, total }) {
    if (!user) return null

    const order = {
      id: `ORD-${Date.now().toString().slice(-6)}`,
      date: new Date().toISOString().slice(0, 10),
      status: 'pending',
      total,
      subtotal,
      shipping,
      items: items.map((item) => ({
        title: item.title,
        quantity: item.quantity,
        price: item.price,
        productId: item.productId,
      })),
    }

    const allOrders = loadJson(ORDERS_KEY, {})
    const userOrders = allOrders[user.id] ?? []
    const nextOrders = [order, ...userOrders]
    saveJson(ORDERS_KEY, { ...allOrders, [user.id]: nextOrders })
    setOrders(nextOrders)
    return order
  }

  function addAppointment(booking) {
    if (!user) return null

    const appointment = {
      id: `APT-${Date.now().toString().slice(-6)}`,
      service: booking.service,
      category: booking.category,
      date: booking.date,
      time: booking.time,
      status: 'pending',
    }

    const allBookings = loadJson(BOOKINGS_KEY, {})
    const userBookings = allBookings[user.id] ?? []
    const nextBookings = [appointment, ...userBookings]
    saveJson(BOOKINGS_KEY, { ...allBookings, [user.id]: nextBookings })
    setAppointments(nextBookings)
    return appointment
  }

  const value = {
    user,
    isAuthenticated: Boolean(user),
    orders,
    appointments,
    login,
    register,
    logout,
    updateProfile,
    addOrder,
    addAppointment,
  }

  return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
}

export function useAccount() {
  const context = useContext(AccountContext)
  if (!context) {
    throw new Error('useAccount must be used within AccountProvider')
  }
  return context
}
