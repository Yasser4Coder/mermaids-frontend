import categorySpa from '@/assets/CategorySpa.png'
import categoryBeautyCenter from '@/assets/CategoryBeautyCenter.png'
import categoryClinic from '@/assets/CategoryClinic.png'

export const categories = [
  {
    id: 'spa',
    title: 'SPA',
    description:
      'Immerse yourself in tranquility with our signature spa rituals. From hot stone massages to aromatherapy sessions, every treatment is designed to restore balance and rejuvenate your body and mind.',
    image: categorySpa,
    href: '/spa',
  },
  {
    id: 'beauty-center',
    title: 'Beauty Center',
    description:
      'Discover refined beauty treatments tailored to enhance your natural radiance. Our expert aestheticians deliver facials, makeup artistry, and personalized skincare regimens in an elegant setting.',
    image: categoryBeautyCenter,
    href: '/beauty-center',
  },
  {
    id: 'clinic',
    title: 'Clinic',
    description:
      'Experience advanced aesthetic care in a clinical environment that prioritizes safety and results. From laser treatments to medical-grade skincare, our clinic offers cutting-edge solutions for lasting beauty.',
    image: categoryClinic,
    href: '/clinic',
  },
]
