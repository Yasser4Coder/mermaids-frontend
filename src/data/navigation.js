import categorySpa from '@/assets/CategorySpa.png'
import categoryBeautyCenter from '@/assets/CategoryBeautyCenter.png'
import categoryClinic from '@/assets/CategoryClinic.png'
import promotionsImg1 from '@/assets/promotionsImg1.png'

export const menuGroups = [
  {
    id: 'main',
    title: 'Navigate',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
    ],
  },
  {
    id: 'services',
    title: 'Our Services',
    links: [
      {
        label: 'SPA',
        href: '/spa',
        description: 'Wellness, hammam & relaxation',
        image: categorySpa,
      },
      {
        label: 'Beauty Center',
        href: '/beauty-center',
        description: 'Hair, nails & beauty artistry',
        image: categoryBeautyCenter,
      },
      {
        label: 'Clinic',
        href: '/clinic',
        description: 'Medical-grade aesthetic care',
        image: categoryClinic,
      },
    ],
  },
  {
    id: 'shop',
    title: 'Shop',
    links: [
      {
        label: 'Magasin',
        href: '/magasin',
        description: 'Premium beauty products',
        image: promotionsImg1,
      },
    ],
  },
]

export const menuFooterLinks = [{ label: 'Contact', href: '/contact' }]
