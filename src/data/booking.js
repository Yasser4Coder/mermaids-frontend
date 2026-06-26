import { beautyServiceCatalog } from '@/data/beautyCenterServices'
import { clinicServiceCatalog } from '@/data/clinicServices'
import { spaServiceCatalog } from '@/data/spaServices'
import { extractServicesFromCatalog } from '@/utils/booking'

export const bookingPageData = {
  hero: {
    eyebrow: 'Reservations',
    title: 'Book Your Appointment',
    subtitle:
      'Choose your service, pick a time, and let our team prepare a personalized experience for you.',
  },
  serviceCategories: [
    {
      id: 'spa',
      label: 'SPA',
      description: 'Hammam, massages, pool, jacuzzi & wellness',
    },
    {
      id: 'beauty-center',
      label: 'Beauty Center',
      description: 'Hair, nails, makeup, lashes & more',
    },
    {
      id: 'clinic',
      label: 'Clinic',
      description: 'Medical-grade facials & aesthetic treatments',
    },
  ],
  servicesByCategory: {
    spa: extractServicesFromCatalog(spaServiceCatalog),
    'beauty-center': extractServicesFromCatalog(beautyServiceCatalog),
    clinic: extractServicesFromCatalog(clinicServiceCatalog),
  },
  timeSlots: [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
  ],
  highlights: [
    'Certified professionals',
    'Premium products & equipment',
    'Flexible scheduling 7 days a week',
    'Confirmation within 24 hours',
  ],
  contact: {
    phone: '+213 771 12 12 12',
    phoneHref: 'tel:+213771121212',
    email: 'mermaids@gmail.com',
    emailHref: 'mailto:mermaids@gmail.com',
    location: 'Chlef, Algérie',
  },
}
