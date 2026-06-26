import clinicPageHero from '@/assets/clinic_page.png'
import categoryClinic from '@/assets/CategoryClinic.png'
import servicesImage from '@/assets/services.png'
import gallery1 from '@/assets/gallery1.png'
import gallery2 from '@/assets/gallery2.png'
import gallery3 from '@/assets/gallery3.png'
import whyUs from '@/assets/whyUs.png'
import promotionsImg1 from '@/assets/promotionsImg1.png'

export const clinicPageData = {
  hero: {
    image: clinicPageHero,
    title: 'Clinic',
    description:
      'Advanced medical aesthetic treatments delivered by certified specialists — personalized care in a safe, clinical environment designed for visible, lasting results.',
    primaryCta: { label: 'Book Consultation', href: '/book' },
    secondaryCta: { label: 'Learn More', href: '#how-it-works' },
    features: [
      {
        id: 'technology',
        label: 'Medical Grade Technology',
        description: 'FDA-approved devices and advanced clinical protocols.',
      },
      {
        id: 'practitioners',
        label: 'Expert Practitioners',
        description: 'Certified specialists with years of aesthetic expertise.',
      },
      {
        id: 'rooms',
        label: 'Private Treatment Rooms',
        description: 'Discreet, sanitized spaces designed for your comfort.',
      },
      {
        id: 'plans',
        label: 'Personalized Plans',
        description: 'Custom treatment paths tailored to your skin goals.',
      },
      {
        id: 'results',
        label: 'Proven Results',
        description: 'Visible improvements backed by real client outcomes.',
      },
    ],
  },

  treatmentsSection: {
    eyebrow: 'Our Treatments',
    title: 'Advanced Treatments for Every Skin Need',
    subtitle:
      'From deep-cleansing Hydrafacial to targeted anti-aging protocols — each treatment is tailored to your unique skin profile.',
  },

  treatmentCards: [
    {
      id: 'hydrafacial',
      title: 'Hydrafacial',
      description: 'Deep cleanse, exfoliate, and hydrate in one advanced facial with instant glow.',
      image: categoryClinic,
      priceFrom: '6500 DA',
    },
    {
      id: 'phototherapy',
      title: 'Phototherapy',
      description: 'Light-based therapy for rejuvenation, acne, and pigmentation concerns.',
      image: servicesImage,
      priceFrom: '3500 DA',
    },
    {
      id: 'anti-aging',
      title: 'Anti Aging',
      description: 'Targeted protocols combining collagen and nourishing soins for visible renewal.',
      image: gallery1,
      priceFrom: '10500 DA',
    },
    {
      id: 'eye-contour',
      title: 'Eye Contour',
      description: 'Specialized care for fine lines, puffiness, and dark circles around the eyes.',
      image: gallery2,
      priceFrom: '25000 DA',
    },
    {
      id: 'collagen',
      title: 'Collagen Treatment',
      description: 'Restore firmness and elasticity with professional collagen infusion.',
      image: gallery3,
      priceFrom: '3500 DA',
    },
    {
      id: 'mermaid',
      title: 'Soin Mermaid',
      description: 'Signature nourishing facial inspired by the sea — radiant, hydrated skin.',
      image: promotionsImg1,
      priceFrom: '12000 DA',
    },
    {
      id: 'glowing',
      title: 'Soin Glowing',
      description: 'Quick luminosity boost for an instantly refreshed, even-toned complexion.',
      image: whyUs,
      priceFrom: '3000 DA',
    },
    {
      id: 'hydrating',
      title: 'Soin Hydratant',
      description: 'Deep hydration therapy to restore moisture balance and soft, supple skin.',
      image: gallery2,
      priceFrom: '5000 DA',
    },
  ],

  howItWorks: {
    title: 'How It Works',
    description:
      'Every journey begins with understanding your skin. Our four-step process ensures safe, effective, and personalized results from consultation to aftercare.',
    image: gallery1,
    steps: [
      {
        number: '01',
        title: 'Consultation',
        description: 'Skin analysis and discussion of your goals with a certified specialist.',
      },
      {
        number: '02',
        title: 'Treatment Plan',
        description: 'A personalized protocol tailored to your skin type and desired outcomes.',
      },
      {
        number: '03',
        title: 'Procedure',
        description: 'Advanced treatment performed with medical-grade equipment in comfort.',
      },
      {
        number: '04',
        title: 'Aftercare',
        description: 'Follow-up guidance and adjusted plans to maintain lasting improvements.',
      },
    ],
  },

  beforeAfter: [
    { title: 'Acne Treatment', before: gallery3, after: gallery1 },
    { title: 'Hydrafacial', before: gallery1, after: gallery2 },
    { title: 'Anti-Aging Program', before: gallery2, after: whyUs },
  ],

  specialistsSection: {
    title: 'Personalized Care You Can Trust',
    description:
      'Our team of certified dermatologists and aesthetic specialists brings clinical expertise and genuine care to every consultation and treatment.',
    cta: { label: 'Meet Our Specialists', href: '#specialists' },
  },

  specialists: [
    {
      name: 'Dr. Sarah Benali',
      role: 'Dermatologist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    },
    {
      name: 'Dr. Ines Merabet',
      role: 'Medical Aesthetician',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
    },
    {
      name: 'Lina Hadj',
      role: 'Senior Facial Therapist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    },
  ],

  packages: [
    {
      title: 'Glow & Radiance',
      includes: ['Hydrafacial', 'Soin Glowing', 'Soin Mermaid'],
      price: 'Sur devis',
    },
    {
      title: 'Anti Aging Program',
      includes: ['Soin Anti Age', 'Soin Anti Rides', 'Soin Collagen'],
      price: '35000 DA',
    },
    {
      title: 'Acne Clear Program',
      includes: ['Soin Apaisant', 'Soin Matifiant', 'Phototherapy'],
      price: 'Sur devis',
    },
    {
      title: 'Eye Contour Program',
      includes: ['Soin du contour des yeux', '5 sessions', 'Follow-up care'],
      price: '25000 DA',
    },
  ],

  consultationCta: {
    title: 'Not Sure Which Treatment Is Right For You?',
    description: 'Book a free consultation and let our specialists guide you to the perfect protocol.',
    cta: { label: 'Book Consultation', href: '/book' },
  },

  finalCta: {
    image: categoryClinic,
    title: 'Ready to Transform Your Skin?',
    description:
      'Take the first step toward healthier, radiant skin. Our team is ready to welcome you.',
    cta: { label: 'Book Consultation', href: '/book' },
    contact: [
      { label: 'Call Us', value: '+213 771 12 12 12', href: 'tel:+213771121212', icon: 'phone' },
      { label: 'Email Us', value: 'mermaids@gmail.com', href: 'mailto:mermaids@gmail.com', icon: 'email' },
      { label: 'Visit Us', value: 'Chlef, Algérie', href: '/contact', icon: 'location' },
    ],
  },

  serviceCategories: [
    {
      title: 'Facial Treatments',
      groups: [
        {
          name: 'Clinical Facials',
          items: [
            { name: 'Phototherapy', price: '3500 DA' },
            { name: 'Hydrafacial', price: '6500 DA' },
            { name: 'Soin Nourissant', price: '7000 DA' },
            { name: 'Soin Hydratant', price: '5000 DA' },
            { name: 'Soin Anti Age', price: '10500 DA' },
            { name: 'Soin Collagen', price: '3500 DA' },
            { name: 'Soin Anti Rides', price: '8000 DA' },
            { name: 'Soin Anti Rides — Abonnement 6 séances', price: '35000 DA' },
            { name: 'Moulage', price: '2500 DA' },
            { name: 'Soin du contour des yeux', price: '25000 DA (5 séances)' },
            { name: 'Soin Apaisant', price: '7000 DA' },
            { name: 'Soin Éclaircissant', price: '6000 DA' },
            { name: 'Soin Rafraîchissant', price: '5000 DA' },
            { name: 'Soin Matifiant', price: '6000 DA' },
            { name: 'Soin Mermaid', price: '12000 DA' },
            { name: 'Soin Glowing', price: '3000 DA' },
            { name: 'Soin Hydraback', price: '14000 DA' },
            { name: 'Soin Hydraback Basic', price: '7000 DA' },
          ],
        },
      ],
    },
    {
      title: 'Advanced Hair & Scalp Treatments',
      groups: [
        {
          name: 'Scalp & Repair',
          items: [
            { name: 'Cryothérapie Capillaire', price: '10000 DA' },
            { name: 'SOS', price: 'À partir de 9000 DA / dose' },
            { name: 'Olaplex', price: 'À partir de 4500 DA' },
            { name: 'Nashi', price: 'À partir de 14000 DA / dose' },
            { name: 'Plastica', price: 'À partir de 12000 DA / dose' },
          ],
        },
      ],
    },
  ],
}

export const clinicServiceCatalog = {
  sectionId: 'all-treatments',
  bookCategory: 'clinic',
  header: {
    eyebrow: 'Full Treatments Menu',
    wireframeLabel: 'Medical Clinic',
    title: 'All Treatments & Prices',
    subtitle: 'Discover our complete clinical aesthetic menu',
    tags: ['Facials', 'Anti-Aging', 'Hydrafacial', 'Hair & Scalp'],
  },
  categories: [
    {
      id: 'facial',
      label: 'Facials',
      title: 'Facial Treatments',
      groups: [
        {
          name: 'Clinical Facials',
          items: [
            {
              name: 'Phototherapy',
              price: '3500 DA',
              description: 'Light-based skin rejuvenation therapy',
              popular: true,
            },
            {
              name: 'Hydrafacial',
              price: '6500 DA',
              description: 'Deep cleanse, exfoliate, and hydrate in one',
              popular: true,
            },
            { name: 'Soin Nourissant', price: '7000 DA', description: 'Nourishing restorative facial' },
            { name: 'Soin Hydratant', price: '5000 DA', description: 'Intensive hydration treatment' },
            {
              name: 'Soin Anti Age',
              price: '10500 DA',
              description: 'Advanced anti-aging facial protocol',
              popular: true,
            },
            { name: 'Soin Collagen', price: '3500 DA', description: 'Collagen-boosting facial treatment' },
            { name: 'Soin Anti Rides', price: '8000 DA', description: 'Targeted wrinkle-reduction treatment' },
            { name: 'Soin Anti Rides — Abonnement 6 séances', price: '35000 DA', description: 'Wrinkle treatment — 6 sessions' },
            { name: 'Moulage', price: '2500 DA', description: 'Professional skin diagnosis mapping' },
            { name: 'Soin du contour des yeux', price: '25000 DA (5 séances)', description: 'Eye contour care — 5 sessions' },
            { name: 'Soin Apaisant', price: '7000 DA', description: 'Calming treatment for sensitive skin' },
            { name: 'Soin Éclaircissant', price: '6000 DA', description: 'Brightening and even-tone facial' },
            { name: 'Soin Rafraîchissant', price: '5000 DA', description: 'Refreshing revitalizing facial' },
            { name: 'Soin Matifiant', price: '6000 DA', description: 'Mattifying treatment for oily skin' },
            {
              name: 'Soin Mermaid',
              price: '12000 DA',
              description: 'Signature sea-inspired nourishing facial',
              popular: true,
            },
            { name: 'Soin Glowing', price: '3000 DA', description: 'Quick luminosity boost facial' },
            { name: 'Soin Hydraback', price: '14000 DA', description: 'Advanced HydraBack treatment' },
            { name: 'Soin Hydraback Basic', price: '7000 DA', description: 'Essential HydraBack facial' },
          ],
        },
      ],
    },
    {
      id: 'hair-scalp',
      label: 'Hair & Scalp',
      title: 'Advanced Hair & Scalp Treatments',
      groups: [
        {
          name: 'Scalp & Repair',
          items: [
            {
              name: 'Cryothérapie Capillaire',
              price: '10000 DA',
              description: 'Cold therapy for scalp health and shine',
              popular: true,
            },
            { name: 'SOS', price: 'À partir de 9000 DA / dose', description: 'Emergency hair repair dose' },
            {
              name: 'Olaplex',
              price: 'À partir de 4500 DA',
              description: 'Bond-building hair repair treatment',
              popular: true,
            },
            { name: 'Nashi', price: 'À partir de 14000 DA / dose', description: 'Nashi argan nourishing dose' },
            { name: 'Plastica', price: 'À partir de 12000 DA / dose', description: 'Intensive restructuring dose' },
          ],
        },
      ],
    },
  ],
  cta: {
    title: 'Ready to book your consultation?',
    description: 'Our specialists will design a personalized treatment plan for your skin.',
    label: 'Book Consultation',
    href: '/book?category=clinic',
  },
}
