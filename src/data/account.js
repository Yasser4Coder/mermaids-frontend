export const accountPageData = {
  hero: {
    eyebrow: 'My Account',
    title: 'Your Mermaids Space',
    subtitle: 'Manage your profile, orders, and appointments in one place.',
  },
  guest: {
    eyebrow: 'Welcome',
    title: 'Sign in to your account',
    description:
      'Access your order history, upcoming appointments, and personalized beauty recommendations.',
    benefits: [
      'Track magasin orders and delivery status',
      'View and manage your spa & clinic bookings',
      'Save your details for faster checkout',
      'Receive exclusive member offers',
    ],
    demoHint: 'Demo: demo@mermaids.dz / demo123',
  },
  nav: [
    { id: 'overview', label: 'Overview' },
    { id: 'profile', label: 'Profile' },
    { id: 'orders', label: 'Orders' },
    { id: 'appointments', label: 'Appointments' },
  ],
  overview: {
    quickLinks: [
      { label: 'Shop Magasin', href: '/magasin', description: 'Browse our product collection' },
      { label: 'Book a Session', href: '/book', description: 'SPA, Beauty Center & Clinic' },
      { label: 'Contact Us', href: '/contact', description: 'Questions or special requests' },
    ],
  },
  orderStatuses: {
    pending: { label: 'Pending', className: 'bg-cream-box text-charcoal' },
    confirmed: { label: 'Confirmed', className: 'bg-cream-box text-ink' },
    shipped: { label: 'Shipped', className: 'bg-ink text-cream' },
    delivered: { label: 'Delivered', className: 'bg-charcoal-dark text-cream' },
    cancelled: { label: 'Cancelled', className: 'bg-cream-dark text-charcoal' },
  },
  appointmentStatuses: {
    pending: { label: 'Pending confirmation', className: 'bg-cream-box text-charcoal' },
    confirmed: { label: 'Confirmed', className: 'bg-ink text-cream' },
    completed: { label: 'Completed', className: 'bg-charcoal-dark text-cream' },
    cancelled: { label: 'Cancelled', className: 'bg-cream-dark text-charcoal' },
  },
}

export const demoUser = {
  id: 'demo-user',
  fullName: 'Amira Benali',
  email: 'demo@mermaids.dz',
  phone: '+213 555 12 34 56',
  address: 'Chlef, Algeria',
  memberSince: '2024-03-15',
}

export const demoOrders = [
  {
    id: 'ORD-1042',
    date: '2025-05-18',
    status: 'delivered',
    total: 9200,
    items: [
      { title: 'Kérastase Elixir Ultime Oil', quantity: 1, price: 4500 },
      { title: 'Hydrating Face Serum', quantity: 1, price: 4200 },
    ],
  },
  {
    id: 'ORD-1038',
    date: '2025-04-02',
    status: 'shipped',
    total: 5800,
    items: [{ title: 'Luxury Nail Polish Set', quantity: 2, price: 2900 }],
  },
]

export const demoAppointments = [
  {
    id: 'APT-221',
    service: 'Hammam VIP',
    category: 'SPA',
    date: '2025-06-28',
    time: '14:00',
    status: 'confirmed',
  },
  {
    id: 'APT-215',
    service: 'HydraFacial Treatment',
    category: 'Clinic',
    date: '2025-05-10',
    time: '11:00',
    status: 'completed',
  },
]
