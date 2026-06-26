import categorySpa from '@/assets/CategorySpa.png'
import servicesImage from '@/assets/services.png'
import gallery1 from '@/assets/gallery1.png'
import gallery2 from '@/assets/gallery2.png'
import gallery3 from '@/assets/gallery3.png'
import promotionsImg1 from '@/assets/promotionsImg1.png'
import promotionsImg2 from '@/assets/promotionsImg2.png'
import whyUs from '@/assets/whyUs.png'
import ctaBg from '@/assets/cta.png'

export const spaPageData = {
  hero: {
    image: categorySpa,
    title: 'Relax, Recharge & Rejuvenate',
    description:
      'Escape the everyday in our luxury spa sanctuary. From traditional hammam rituals to therapeutic massages and aquatic wellness, every experience is crafted to restore your body and calm your mind.',
    primaryCta: { label: 'Book Your SPA', href: '/book' },
    secondaryCta: { label: 'Explore Packages', href: '#packages' },
    features: [
      { label: 'Luxury Facilities' },
      { label: 'Expert Therapists' },
      { label: 'Premium Products' },
      { label: 'Hygienic & Safe' },
      { label: 'Personalized Care' },
    ],
  },

  experiencesSection: {
    eyebrow: 'Our SPA Experiences',
    title: 'Discover Your Perfect Escape',
    subtitle:
      'Five distinct worlds of wellness — each crafted to restore, renew, and elevate your sense of self.',
  },

  experiences: [
    {
      id: 'hammam',
      title: 'Hammam',
      image: categorySpa,
      description:
        'Ancient cleansing rituals from Hammam simple to Royal and Mariée ceremonies.',
      href: '#all-services',
    },
    {
      id: 'massage',
      title: 'Massage',
      image: servicesImage,
      description:
        'Therapeutic touch — anti-stress, hot stone, Asian Head Spa, and madérothérapie.',
      href: '#all-services',
    },
    {
      id: 'jacuzzi',
      title: 'Jacuzzi',
      image: gallery2,
      description:
        'Warm, bubbling waters designed to ease tension and invite complete relaxation.',
      href: '#all-services',
    },
    {
      id: 'pool',
      title: 'Pool',
      image: gallery3,
      description:
        'Adult and children pools with optional coaching in a serene aquatic environment.',
      href: '#all-services',
    },
    {
      id: 'wellness',
      title: 'Wellness Programs',
      image: whyUs,
      description:
        'Aqua Zumba, aquagym, and aquatic movement programs that energize and restore.',
      href: '#all-services',
    },
    {
      id: 'fitness',
      title: 'Fitness & Sport',
      image: promotionsImg2,
      description:
        'AQ8, yoga, zumba, and Body Karaté — holistic fitness in a luxury setting.',
      href: '#all-services',
    },
  ],

  whyChoose: {
    title: 'Why Choose Our SPA',
    description:
      'With over a decade of excellence in wellness, Mermaids SPA has become a sanctuary for those who seek the finest in self-care and restoration.',
    image: whyUs,
    features: [
      { title: 'Expert & Certified Therapists' },
      { title: 'Premium Natural Products' },
      { title: 'Luxury Private Rooms' },
      { title: 'Modern Equipment' },
      { title: 'Hygienic & Safe Environment' },
      { title: 'Holistic Wellness Approach' },
    ],
  },

  packagesSection: {
    title: 'Membership & Packages',
    subtitle:
      'Whether you visit weekly or are preparing for a special occasion, our packages offer exceptional value.',
    image: promotionsImg1,
    cta: { label: 'View All Packages', href: '#all-services' },
  },

  packages: [
    {
      title: 'Hammam & Relax',
      includes: ['Hammam VIP', 'Massage Relaxation', 'Jacuzzi access'],
      price: '7500 DA',
    },
    {
      title: 'Bride Package',
      includes: ['Hammam Mariée', 'Gaâda Henné', 'Asian Head Spa'],
      price: '15000 DA',
    },
    {
      title: 'Couples Retreat',
      includes: ['Hammam Royal for two', 'Massage aux pierres chaudes'],
      price: 'Sur devis',
    },
    {
      title: 'Wellness Abonnement',
      includes: ['Aquagym', 'Yoga', 'Pool access — monthly'],
      price: 'From 5400 DA',
    },
  ],

  serviceColumns: [
    {
      id: 'hammam',
      title: 'Hammams & Rituals',
      services: [
        'Hammam simple',
        'Kassa',
        'Hammam VIP',
        'Hammam Royal',
        'Hammam Mariée',
        'Gaâda Henné',
      ],
    },
    {
      id: 'massage',
      title: 'Massages',
      services: [
        'Massage Anti-stress',
        'Massage Relaxation',
        'Pierres chaudes',
        'Asian Head Spa',
        'Madérothérapie',
        'Drainage',
      ],
    },
    {
      id: 'pool',
      title: 'Pool & Jacuzzi',
      services: [
        'Piscine Enfant',
        'Piscine Adulte',
        'Piscine avec coach',
        'Jacuzzi Adultes',
      ],
    },
    {
      id: 'aquatic',
      title: 'Aquatic Activities',
      services: [
        'Aqua Zumba',
        'Aquagym',
        'Aquagym Abonnement',
      ],
    },
    {
      id: 'fitness',
      title: 'Fitness & Sport',
      services: [
        'AQ8',
        'Yoga',
        'Zumba',
        'Body Karaté',
      ],
    },
  ],

  servicesSection: {
    title: 'Our Services & Prices',
    subtitle: 'Browse our complete menu of spa, wellness, and fitness offerings.',
  },

  gallery: [
    { id: 1, src: categorySpa, alt: 'Spa interior' },
    { id: 2, src: gallery1, alt: 'Treatment room' },
    { id: 3, src: gallery2, alt: 'Relaxation area' },
    { id: 4, src: gallery3, alt: 'Wellness space' },
    { id: 5, src: promotionsImg1, alt: 'Spa experience' },
    { id: 6, src: whyUs, alt: 'Spa sanctuary' },
  ],

  testimonials: [
    {
      id: 1,
      name: 'Amira B.',
      role: 'Spa Guest',
      quote:
        'The Hammam Royal experience was absolutely divine. I felt completely renewed — the atmosphere, the care, everything was perfect.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80',
    },
    {
      id: 2,
      name: 'Leila K.',
      role: 'Wellness Member',
      quote:
        'I come every week for aquagym and the Asian Head Spa. Mermaids has become my favorite place to unwind and recharge.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80',
    },
    {
      id: 3,
      name: 'Nadia R.',
      role: 'Regular Client',
      quote:
        'The massage therapists are exceptional. Hot stone massage and madérothérapie have transformed how I feel every day.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80',
    },
  ],

  finalCta: {
    image: ctaBg,
    title: 'Book Your SPA Experience',
    cta: { label: 'Book Now', href: '/book' },
  },

  serviceCategories: [
    {
      title: 'Hammam & Wellness',
      groups: [
        {
          name: 'Hammam',
          items: [
            { name: 'Hammam simple', price: '1000 DA' },
            { name: 'Kassa (corps complet)', price: '1000 DA' },
            { name: 'Kassa (demi)', price: '500 DA' },
            { name: 'Massage Hammam', price: '1500 DA' },
            { name: 'Hammam VIP', price: '5000 DA' },
            { name: 'Hammam Royal', price: '12000 DA' },
            { name: 'Hammam Mariée (bride)', price: '15000 DA' },
            { name: 'Gaâda', price: '5000 DA' },
            { name: 'Gaâda Henné', price: '7000 DA' },
          ],
        },
      ],
    },
    {
      title: 'Massages & Body Treatments',
      groups: [
        {
          name: 'Massages',
          items: [
            { name: 'Réflexologie plantaire (30 min)', price: '3500 DA' },
            { name: 'Massage Anti-stress (45 min)', price: '5000 DA' },
            { name: 'Massage Relaxation (45 min)', price: '6000 DA' },
            { name: 'Massage aux pierres chaudes (45 min)', price: '6500 DA' },
            { name: 'Massage minceur — Abonnement 8 séances', price: '48000 DA' },
            { name: 'Massage décongestionnant (45 min)', price: '5000 DA' },
            { name: 'Massage raffermissant — Abonnement 6 séances', price: '45000 DA' },
            { name: 'Massage Thaïlandais / Herbal', price: 'Sur demande' },
            { name: 'Enveloppement aux algues', price: '9000 DA' },
            { name: 'Enveloppement aux algues — Abonnement 6 séances', price: '50000 DA' },
            { name: 'Massage Lifting', price: '5500 DA' },
            { name: 'Asian Head Spa', price: '4500 DA' },
            { name: 'Massage Thérapeutique (45 min)', price: '6500 DA' },
            { name: 'Massage Thérapeutique dos', price: '3000 DA' },
            { name: 'Drainage', price: '8000 DA' },
            { name: 'Madérothérapie corps complet', price: '9000 DA' },
            { name: 'Madérothérapie — Abonnement 8 séances', price: '56000 DA' },
            { name: 'Madérothérapie demi-corps — Abonnement', price: '28000 DA' },
          ],
        },
      ],
    },
    {
      title: 'Fitness & Aquatic Activities',
      groups: [
        {
          name: 'Piscine',
          items: [
            { name: 'Piscine Enfant', price: '500 DA' },
            { name: 'Piscine Enfant avec coach', price: '900 DA' },
            { name: 'Piscine Adulte', price: '1000 DA' },
            { name: 'Piscine Adulte avec coach', price: '2000 DA' },
          ],
        },
        {
          name: 'Jacuzzi',
          items: [{ name: 'Jacuzzi Adultes', price: '1500 DA' }],
        },
        {
          name: 'Activités Aquatiques',
          items: [
            { name: 'Aqua Zumba / séance', price: '500 DA' },
            { name: 'Aquagym / séance', price: '900 DA' },
            { name: 'Aquagym — Abonnement', price: '6500 DA' },
          ],
        },
        {
          name: 'Salle de Sport',
          items: [
            { name: 'AQ8', price: '2000 DA' },
            { name: 'AQ8 — 8 séances', price: '14000 DA' },
            { name: 'Yoga / séance', price: '1000 DA' },
            { name: 'Yoga VIP', price: '5000 DA' },
            { name: 'Zumba / séance', price: '800 DA' },
            { name: 'Zumba — Abonnement', price: '5400 DA' },
            { name: 'Body Karaté / séance', price: '800 DA' },
            { name: 'Body Karaté — Abonnement', price: '5400 DA' },
          ],
        },
      ],
    },
  ],
}

export const spaServiceCatalog = {
  sectionId: 'all-services',
  bookCategory: 'spa',
  header: {
    eyebrow: 'Full SPA Menu',
    wireframeLabel: 'Luxury SPA',
    title: 'Our Services & Prices',
    subtitle: 'Discover our complete wellness and relaxation menu',
    tags: ['Hammam', 'Massages', 'Pool', 'Jacuzzi', 'Fitness'],
  },
  categories: [
    {
      id: 'hammam',
      label: 'Hammam',
      title: 'Hammam & Wellness',
      groups: [
        {
          name: 'Hammam',
          items: [
            { name: 'Hammam simple', price: '1000 DA', description: 'Traditional steam bath ritual' },
            { name: 'Kassa (corps complet)', price: '1000 DA', description: 'Full-body exfoliation scrub' },
            { name: 'Kassa (demi)', price: '500 DA', description: 'Half-body exfoliation scrub' },
            { name: 'Massage Hammam', price: '1500 DA', description: 'Relaxing massage after hammam' },
            {
              name: 'Hammam VIP',
              price: '5000 DA',
              description: 'Premium private hammam experience',
              popular: true,
            },
            {
              name: 'Hammam Royal',
              price: '12000 DA',
              description: 'Ultimate royal hammam ritual',
              popular: true,
            },
            {
              name: 'Hammam Mariée (bride)',
              price: '15000 DA',
              description: 'Complete bridal hammam ceremony',
              popular: true,
            },
            { name: 'Gaâda', price: '5000 DA', description: 'Traditional pre-wedding beauty ritual' },
            { name: 'Gaâda Henné', price: '7000 DA', description: 'Gaâda ritual with henna application' },
          ],
        },
      ],
    },
    {
      id: 'massages',
      label: 'Massages',
      title: 'Massages & Body Treatments',
      groups: [
        {
          name: 'Massages',
          items: [
            { name: 'Réflexologie plantaire (30 min)', price: '3500 DA', description: 'Foot reflexology pressure therapy' },
            { name: 'Massage Anti-stress (45 min)', price: '5000 DA', description: 'Tension-relieving full-body massage' },
            { name: 'Massage Relaxation (45 min)', price: '6000 DA', description: 'Deep relaxation massage' },
            {
              name: 'Massage aux pierres chaudes (45 min)',
              price: '6500 DA',
              description: 'Hot stone therapeutic massage',
              popular: true,
            },
            { name: 'Massage minceur — Abonnement 8 séances', price: '48000 DA', description: 'Slimming massage package' },
            { name: 'Massage décongestionnant (45 min)', price: '5000 DA', description: 'Lymphatic drainage massage' },
            { name: 'Massage raffermissant — Abonnement 6 séances', price: '45000 DA', description: 'Firming massage package' },
            { name: 'Massage Thaïlandais / Herbal', price: 'Sur demande', description: 'Traditional Thai herbal massage' },
            { name: 'Enveloppement aux algues', price: '9000 DA', description: 'Detoxifying seaweed body wrap' },
            { name: 'Enveloppement aux algues — Abonnement 6 séances', price: '50000 DA', description: 'Seaweed wrap package' },
            { name: 'Massage Lifting', price: '5500 DA', description: 'Facial and body lifting massage' },
            {
              name: 'Asian Head Spa',
              price: '4500 DA',
              description: 'Japanese-inspired scalp and head treatment',
              popular: true,
            },
            { name: 'Massage Thérapeutique (45 min)', price: '6500 DA', description: 'Therapeutic deep tissue massage' },
            { name: 'Massage Thérapeutique dos', price: '3000 DA', description: 'Targeted back therapeutic massage' },
            { name: 'Drainage', price: '8000 DA', description: 'Manual lymphatic drainage' },
            {
              name: 'Madérothérapie corps complet',
              price: '9000 DA',
              description: 'Full-body wood therapy sculpting',
              popular: true,
            },
            { name: 'Madérothérapie — Abonnement 8 séances', price: '56000 DA', description: 'Wood therapy package' },
            { name: 'Madérothérapie demi-corps — Abonnement', price: '28000 DA', description: 'Half-body wood therapy package' },
          ],
        },
      ],
    },
    {
      id: 'fitness',
      label: 'Fitness',
      title: 'Fitness & Aquatic Activities',
      groups: [
        {
          name: 'Piscine',
          items: [
            { name: 'Piscine Enfant', price: '500 DA', description: 'Kids pool access' },
            { name: 'Piscine Enfant avec coach', price: '900 DA', description: 'Kids pool with coach supervision' },
            { name: 'Piscine Adulte', price: '1000 DA', description: 'Adult pool access' },
            { name: 'Piscine Adulte avec coach', price: '2000 DA', description: 'Adult pool with personal coach' },
          ],
        },
        {
          name: 'Jacuzzi',
          items: [
            {
              name: 'Jacuzzi Adultes',
              price: '1500 DA',
              description: 'Relaxing hydrotherapy jacuzzi session',
              popular: true,
            },
          ],
        },
        {
          name: 'Activités Aquatiques',
          items: [
            { name: 'Aqua Zumba / séance', price: '500 DA', description: 'Energetic water zumba class' },
            { name: 'Aquagym / séance', price: '900 DA', description: 'Low-impact aquatic fitness' },
            { name: 'Aquagym — Abonnement', price: '6500 DA', description: 'Aquagym monthly package' },
          ],
        },
        {
          name: 'Salle de Sport',
          items: [
            { name: 'AQ8', price: '2000 DA', description: 'AQ8 fitness session' },
            { name: 'AQ8 — 8 séances', price: '14000 DA', description: 'AQ8 package — 8 sessions' },
            { name: 'Yoga / séance', price: '1000 DA', description: 'Guided yoga class' },
            {
              name: 'Yoga VIP',
              price: '5000 DA',
              description: 'Private VIP yoga session',
              popular: true,
            },
            { name: 'Zumba / séance', price: '800 DA', description: 'Dance fitness class' },
            { name: 'Zumba — Abonnement', price: '5400 DA', description: 'Zumba monthly package' },
            { name: 'Body Karaté / séance', price: '800 DA', description: 'Body karate fitness class' },
            { name: 'Body Karaté — Abonnement', price: '5400 DA', description: 'Body karate monthly package' },
          ],
        },
      ],
    },
  ],
  cta: {
    title: 'Ready to book your SPA experience?',
    description: 'Restore your body and calm your mind in our sanctuary.',
    label: 'Book Now',
    href: '/book?category=spa',
  },
}
