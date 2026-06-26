import categoryBeautyCenter from '@/assets/CategoryBeautyCenter.png'
import servicesImage from '@/assets/services.png'
import exploringImg1 from '@/assets/ExploringImg1.png'
import exploringImg2 from '@/assets/ExploringImg2.png'
import gallery1 from '@/assets/gallery1.png'
import gallery2 from '@/assets/gallery2.png'
import gallery3 from '@/assets/gallery3.png'
import promotionsImg1 from '@/assets/promotionsImg1.png'
import promotionsImg2 from '@/assets/promotionsImg2.png'
import whyUs from '@/assets/whyUs.png'
import ctaBg from '@/assets/cta.png'

export const beautyCenterPageData = {
  hero: {
    image: categoryBeautyCenter,
    title: 'Hair, Nails, Makeup & More',
    subtitle: 'All Your Beauty Needs, In One Place',
    description:
      'Your complete beauty destination. From expert hair styling and nail artistry to professional makeup and lash extensions — our team brings your vision to life with precision and elegance.',
    badge: 'Premium Beauty Care',
    primaryCta: { label: 'Book Appointment', href: '/book' },
    secondaryCta: { label: 'Explore Services', href: '#services' },
    features: [
      { label: 'Expert Professionals' },
      { label: 'Premium Products' },
      { label: 'Hygienic & Safe' },
      { label: 'Personalized Care' },
      { label: 'Luxurious Experience' },
    ],
  },

  servicesSection: {
    eyebrow: 'Our Services',
    title: 'Complete Beauty Under One Roof',
    subtitle:
      'Hair, nails, makeup, lashes, epilation, and kids salon — every service you need, expertly delivered.',
  },

  sections: {
    hair: {
      id: 'hair',
      title: 'Hair Salon',
      image: exploringImg1,
      description:
        'Expert cuts, color, and styling with premium products — from everyday brushing to bridal coiffure and restorative treatments.',
      categories: [
        {
          title: 'Brushing',
          items: [
            { name: 'Rinçage', price: '500 DA' },
            { name: 'Rinçage Kérastase', price: '2500 DA' },
            { name: 'Brushing mi-long', price: '800 DA' },
            { name: 'Brushing long', price: '1000 DA' },
          ],
        },
        {
          title: 'Coloration',
          items: [
            { name: 'Coloration N°1', price: 'From 5000 DA' },
            { name: 'Balayage', price: 'From 18000 DA' },
            { name: 'Mèches', price: 'From 9000 DA' },
            { name: 'Coupe', price: '1000 DA' },
          ],
        },
        {
          title: 'Soin Lissant',
          items: [
            { name: 'Filler', price: 'From 9000 DA' },
            { name: 'Soin Brésilien', price: 'From 18000 DA' },
            { name: 'Soin Nashi', price: 'From 24000 DA' },
            { name: 'Cryothérapie', price: '10000 DA' },
          ],
        },
      ],
    },

    nails: {
      id: 'nails',
      title: 'Nails',
      image: gallery2,
      description:
        'Manicure, pedicure, gel, acrylique, and nail art — precision care for hands and feet with lasting results.',
      categories: [
        {
          title: 'Manicure',
          items: [
            { name: 'Manicure Russe', price: '1500 DA' },
            { name: 'VSP Classic', price: 'From 2500 DA' },
            { name: 'Gel naturel', price: 'From 3500 DA' },
            { name: 'Extension Gel', price: 'From 5000 DA' },
          ],
        },
        {
          title: 'Pedicure',
          items: [
            { name: 'VSP Classic', price: 'From 2000 DA' },
            { name: 'Soin Basic', price: '4000 DA' },
            { name: 'Soin paraffine', price: '5000 DA' },
            { name: 'Soin Russe', price: '8000 DA' },
          ],
        },
      ],
    },

    makeup: {
      id: 'makeup',
      title: 'Makeup',
      image: exploringImg2,
      description:
        'From natural day looks to guest and bridal makeup — artistry with premium imported products.',
      categories: [
        {
          title: 'Day Makeup',
          items: [{ name: 'Maquillage de jour', price: '1500 DA' }],
        },
        {
          title: 'Guest Makeup',
          items: [
            { name: 'Invitée (local)', price: '1500 DA' },
            { name: 'Invitée (import)', price: '3000 DA' },
            { name: 'Invitée haute qualité', price: '8000 DA' },
          ],
        },
        {
          title: 'Bridal',
          items: [
            { name: 'Coiffure + Maquillage Mariée', price: 'From 15000 DA' },
            { name: 'Mariée Haute Gamme', price: 'From 25000 DA' },
          ],
        },
      ],
    },

    eyelashes: {
      id: 'eyelashes',
      title: 'Eyelashes & Brows',
      image: gallery3,
      description:
        'Lash extensions, lift, and brow shaping — subtle enhancement or dramatic volume.',
      categories: [
        {
          title: 'Eyelashes',
          items: [
            { name: 'Rehaussement', price: '3500 DA' },
            { name: 'Extension naturel', price: '4500 DA' },
            { name: 'Extension russe', price: '6500 DA' },
            { name: 'Extension wispy', price: '5000 DA' },
          ],
        },
        {
          title: 'Brows',
          items: [
            { name: 'Brow Lift', price: '3500 DA' },
            { name: 'Coloration sourcils', price: '1500 DA' },
          ],
        },
      ],
    },

    epilation: {
      id: 'epilation',
      title: 'Epilation',
      image: servicesImage,
      description:
        'Thread and wax epilation for face and body — precise, gentle hair removal.',
      categories: [
        {
          title: 'Épilation au fil',
          items: [
            { name: 'Sourcils', price: '600 DA' },
            { name: 'Visage complet', price: '1500 DA' },
          ],
        },
        {
          title: 'Épilation à la cire',
          items: [
            { name: 'Visage complet', price: '3500 DA' },
            { name: 'Jambes complètes', price: '3500 DA' },
            { name: 'Corps complet', price: '14500 DA' },
            { name: 'Maillot intégral', price: '3500 DA' },
          ],
        },
      ],
    },

    kids: {
      id: 'kids',
      title: 'Kids Salon',
      image: promotionsImg2,
      description:
        'A playful, gentle space for our youngest guests — hair, nails, makeup, and mini spa moments.',
      categories: [
        {
          title: 'Kids Services',
          items: [
            { name: 'Lavage', price: '300 DA' },
            { name: 'Brushing', price: 'From 300 DA' },
            { name: 'Coupe', price: '500 DA' },
            { name: 'Maquillage', price: '400 DA' },
            { name: 'Massage (20 min)', price: '1200 DA' },
          ],
        },
    ],
  },
  cta: {
    title: 'Ready to book your appointment?',
    description: 'Our beauty experts are here to create your perfect look.',
    label: 'Book Now',
    href: '/book?category=beauty-center',
  },
},

  sectionOrder: ['hair', 'nails', 'makeup', 'eyelashes', 'epilation', 'kids'],

  stats: [
    { value: '5000+', label: 'Happy Clients' },
    { value: '15+', label: 'Expert Stylists' },
    { value: '10+', label: 'Years Experience' },
    { value: '50+', label: 'Beauty Services' },
  ],

  transformations: [
    { id: 1, src: gallery1, alt: 'Balayage styling' },
    { id: 2, src: exploringImg1, alt: 'Hair color' },
    { id: 3, src: gallery2, alt: 'Brushing look' },
    { id: 4, src: exploringImg2, alt: 'Makeup and hair' },
    { id: 5, src: gallery3, alt: 'Bridal styling' },
    { id: 6, src: promotionsImg2, alt: 'Glamour look' },
  ],

  packagesSection: {
    title: 'Beauty Packages',
    subtitle:
      'Curated combinations for brides, events, and VIP experiences — everything in one seamless appointment.',
    image: whyUs,
    cta: { label: 'View All Packages', href: '#all-services' },
  },

  packages: [
    { title: 'Bridal Package', price: 'From 15000 DA' },
    { title: 'VIP Beauty Package', price: 'From 25000 DA' },
    { title: 'Hairstyle Package', price: 'From 4500 DA' },
    { title: 'Nails & Makeup Combo', price: 'From 8000 DA' },
  ],

  gallery: [
    { id: 1, src: exploringImg1, alt: 'Hair styling' },
    { id: 2, src: gallery2, alt: 'Nail design' },
    { id: 3, src: exploringImg2, alt: 'Makeup artistry' },
    { id: 4, src: gallery1, alt: 'Beauty look' },
    { id: 5, src: gallery3, alt: 'Professional makeup' },
    { id: 6, src: promotionsImg2, alt: 'Bridal beauty' },
    { id: 7, src: promotionsImg1, alt: 'Salon experience' },
    { id: 8, src: whyUs, alt: 'Beauty care' },
  ],

  testimonials: [
    {
      id: 1,
      name: 'Yasmine M.',
      role: 'Bridal Client',
      quote:
        'My wedding hair and makeup were absolutely stunning. The team understood exactly what I wanted and made me feel like a princess.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80',
    },
    {
      id: 2,
      name: 'Sofia L.',
      role: 'Regular Client',
      quote:
        'Best nail salon in town! The Russian manicure and gel extensions always look flawless and last for weeks.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80',
    },
    {
      id: 3,
      name: 'Hana T.',
      role: 'Hair Client',
      quote:
        'The balayage and Nashi treatment completely transformed my hair. I get compliments everywhere I go.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80',
    },
  ],

  finalCta: {
    image: ctaBg,
    title: 'Ready For Your Transformation?',
    description: 'Book your hair, nails, makeup, or beauty session with our expert team.',
    cta: { label: 'Book Appointment', href: '/book' },
  },
}

export const beautyServiceCatalog = {
  sectionId: 'all-services',
  bookCategory: 'beauty-center',
  header: {
    eyebrow: 'Full Services Menu',
    wireframeLabel: 'Luxury Salon',
    title: 'Our Services & Prices',
    subtitle: 'Discover our complete beauty menu',
    tags: ['Hair', 'Nails', 'Makeup', 'Lashes', 'Epilation', 'Kids'],
  },
  categories: [
    {
      id: 'hair',
      label: 'Hair',
      title: 'Hair Salon',
      groups: [
        {
          name: 'Brushing',
          items: [
            { name: 'Rinçage', price: '500 DA', description: 'Basic hair rinse treatment' },
            {
              name: 'Rinçage avec Kérastase',
              price: '2500 DA',
              description: 'Premium nourishing rinse with Kérastase',
              popular: true,
            },
            { name: 'Rinçage avec massage', price: '1000 DA', description: 'Relaxing rinse with scalp massage' },
            { name: 'Brushing cheveux court', price: '600 DA', description: 'Blow-dry styling for short hair' },
            { name: 'Brushing mi-long', price: '800 DA', description: 'Blow-dry styling for medium-length hair' },
            { name: 'Brushing long', price: '1000 – 1200 DA', description: 'Blow-dry styling for long hair' },
            { name: 'Brushing extra long', price: '1500 DA', description: 'Blow-dry styling for extra-long hair' },
          ],
        },
        {
          name: 'Coupe',
          items: [
            { name: 'Égalisation', price: '500 DA', description: 'Hair length leveling trim' },
            { name: 'Coupe', price: '1000 DA', description: 'Precision haircut and shape' },
            { name: 'Coupe des fourches', price: '1200 DA', description: 'Split-end trimming treatment' },
          ],
        },
        {
          name: 'Coloration',
          items: [
            { name: 'Coloration produit N°1', price: 'À partir de 5000 DA', description: 'Professional color — premium range' },
            { name: 'Coloration produit N°2', price: 'À partir de 3000 DA', description: 'Professional color — classic range' },
            {
              name: 'Balayage',
              price: 'À partir de 18000 DA',
              description: 'Hand-painted highlights for a sun-kissed finish',
              popular: true,
            },
            { name: 'Mèches', price: 'À partir de 9000 DA', description: 'Classic foil highlights' },
          ],
        },
        {
          name: 'Hair Treatments',
          items: [
            { name: 'Filler', price: 'À partir de 9000 DA', description: 'Deep fiber-repair treatment' },
            { name: 'Soin RP', price: 'À partir de 14000 DA', description: 'Restorative protein care' },
            { name: 'Soin Indien', price: 'À partir de 16000 DA', description: 'Traditional Indian hair ritual' },
            { name: 'Soin Brésilien', price: 'À partir de 18000 DA', description: 'Brazilian smoothing treatment' },
            {
              name: 'Soin Nashi',
              price: 'À partir de 24000 DA',
              description: 'Luxury Nashi argan restoration',
              popular: true,
            },
            { name: 'SOS', price: 'À partir de 9000 DA / dose', description: 'Emergency repair dose' },
            { name: 'Plastica', price: 'À partir de 12000 DA / dose', description: 'Intensive restructuring dose' },
            { name: 'Nashi', price: 'À partir de 14000 DA / dose', description: 'Nashi nourishing dose' },
            { name: 'Olaplex', price: 'À partir de 4500 DA', description: 'Bond-building repair treatment' },
            {
              name: 'Cryothérapie',
              price: '10000 DA',
              description: 'Cold therapy for shine and strength',
              popular: true,
            },
          ],
        },
        {
          name: 'Styling',
          items: [
            { name: 'Ondulé', price: 'À partir de 2500 DA', description: 'Soft curled styling' },
            { name: 'Wavy', price: 'À partir de 6000 DA', description: 'Glamorous wavy styling' },
            { name: 'Coiffure Invitée', price: 'À partir de 4500 DA', description: 'Elegant event hairstyling' },
            { name: 'Coiffure + Maquillage Mariée', price: 'À partir de 15000 DA', description: 'Complete bridal hair and makeup' },
            {
              name: 'Coiffure + Maquillage Mariée Haute Gamme',
              price: 'À partir de 25000 DA',
              description: 'Premium bridal beauty experience',
              popular: true,
            },
          ],
        },
      ],
    },
    {
      id: 'nails',
      label: 'Nails',
      title: 'Nails',
      groups: [
        {
          name: 'Manicure',
          items: [
            {
              name: 'Manicure Russe',
              price: '1500 DA',
              description: 'Precision Russian manicure technique',
              popular: true,
            },
            { name: 'VSP Classic', price: 'À partir de 2500 DA', description: 'Classic gel polish manicure' },
            { name: 'Rubber Base', price: 'À partir de 2500 DA', description: 'Flexible rubber base coating' },
            { name: 'Gel sur ongle naturel', price: 'À partir de 3500 DA', description: 'Gel overlay on natural nails' },
            { name: 'Pose Américaine', price: 'À partir de 3500 DA', description: 'American-style gel application' },
            {
              name: 'Extension Gel sur chablon',
              price: 'À partir de 5000 DA',
              description: 'Gel extensions with nail forms',
              popular: true,
            },
            { name: 'Soin Manicure', price: '4000 DA', description: 'Nourishing hand and nail treatment' },
          ],
        },
        {
          name: 'Pedicure',
          items: [
            { name: 'VSP Classic', price: 'À partir de 2000 DA', description: 'Classic gel polish pedicure' },
            { name: 'Soin Pedicure Basic', price: '4000 DA', description: 'Essential foot care ritual' },
            { name: 'Soin Pedicure avec paraffine', price: '5000 DA', description: 'Paraffin-enriched foot treatment' },
            {
              name: 'Soin Pedicure Russe (Peeling)',
              price: '8000 DA',
              description: 'Deep Russian pedicure with peeling',
              popular: true,
            },
          ],
        },
      ],
    },
    {
      id: 'makeup',
      label: 'Makeup',
      title: 'Makeup',
      groups: [
        {
          name: 'Makeup Services',
          items: [
            { name: 'Maquillage de jour', price: '1500 DA', description: 'Natural daytime makeup look' },
            { name: 'Maquillage invitée (local)', price: '1500 DA', description: 'Guest makeup with local products' },
            { name: 'Maquillage invitée (importation)', price: '3000 DA', description: 'Guest makeup with imported products' },
            {
              name: 'Maquillage invitée haute qualité',
              price: '8000 DA',
              description: 'Premium guest makeup artistry',
              popular: true,
            },
            { name: 'Maquillage shooting', price: 'Sur devis', description: 'Professional photo shoot makeup' },
          ],
        },
      ],
    },
    {
      id: 'lashes',
      label: 'Lashes',
      title: 'Eyelashes & Brows',
      groups: [
        {
          name: 'Lashes & Brows',
          items: [
            { name: 'Rehaussement de cils', price: '3500 DA', description: 'Lash lift for natural curl' },
            { name: 'Extension cil à cil naturel', price: '4500 DA', description: 'Natural classic lash extensions' },
            {
              name: 'Extension cil à cil russe',
              price: '6500 DA',
              description: 'Dramatic Russian volume lashes',
              popular: true,
            },
            { name: 'Brow Lift', price: '3500 DA', description: 'Brow lamination and lift' },
            { name: 'Coloration sourcils', price: '1500 DA', description: 'Professional brow tinting' },
          ],
        },
      ],
    },
    {
      id: 'epilation',
      label: 'Epilation',
      title: 'Epilation',
      groups: [
        {
          name: 'Épilation au fil',
          items: [
            { name: 'Sourcils', price: '600 DA', description: 'Precise thread brow shaping' },
            { name: 'Moustache', price: '300 DA', description: 'Gentle upper lip threading' },
            { name: 'Visage complet', price: '1500 DA', description: 'Full face thread epilation' },
          ],
        },
        {
          name: 'Épilation à la cire',
          items: [
            { name: 'Visage complet', price: '3500 DA', description: 'Full face wax epilation' },
            { name: 'Jambes complètes', price: '3500 DA', description: 'Full leg wax treatment' },
            {
              name: 'Corps complet',
              price: '14500 DA',
              description: 'Complete body wax epilation',
              popular: true,
            },
            { name: 'Maillot intégral', price: '3500 DA', description: 'Full bikini wax treatment' },
          ],
        },
      ],
    },
    {
      id: 'kids',
      label: 'Kids',
      title: 'Kids Salon',
      groups: [
        {
          name: 'Kids Services',
          items: [
            { name: 'Lavage', price: '300 DA', description: 'Gentle kids hair wash' },
            { name: 'Brushing', price: 'À partir de 300 DA', description: 'Fun blow-dry styling for kids' },
            { name: 'Coupe', price: '500 DA', description: 'Kids haircut' },
            { name: 'Maquillage', price: '400 DA', description: 'Playful kids makeup' },
            { name: 'Massage (20 min)', price: '1200 DA', description: 'Relaxing mini massage' },
            {
              name: 'Shooting',
              price: '4000 DA',
              description: 'Kids beauty photo session',
              popular: true,
            },
          ],
        },
      ],
    },
  ],
}
