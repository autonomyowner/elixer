import { boutiqueHighlights } from './boutiqueHighlights'

export type ProductType = 'Gélules Végétales' | 'Gummies' | 'Liquides/Sérums' | 'Poudres'
export type ProductNeed = 'Immunité' | 'Vitalité/Énergie' | 'Sommeil/Détente' | 'Digestion'

export type AdditionalInfo = {
  shipping: string
  returns: string
  payment: string
  exclusiveOffers?: string
}

export type Product = {
  id: string
  slug: string
  name: string
  brand: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  category: string
  productType: ProductType
  need?: ProductNeed
  inStock: boolean
  isPromo: boolean
  rating?: number
  isNew?: boolean
  description: string
  benefits: string[]
  ingredients: string
  usageInstructions: string
  deliveryEstimate: string
  viewersCount: number
  countdownEndDate?: string
  additionalInfo: AdditionalInfo
}

const baseProducts: Product[] = [
  {
    id: '1',
    slug: 'cellavie-magnesium-calme-focus',
    name: 'Bio Elixir Magnésium Calme & Focus',
    brand: 'Bio Elixir',
    price: 2995,
    originalPrice: 2995,
    image: '/client islam girl roman/lequiiop.png',
    images: [
      '/client islam girl roman/lequiiop.png',
      '/client islam girl roman/hite.png',
      '/client islam girl roman/Capture d’écran 2025-11-12 173640.png',
    ],
    category: 'Magnésium',
    productType: 'Gélules Végétales',
    need: 'Sommeil/Détente',
    inStock: true,
    isPromo: false,
    rating: 4.5,
    description:
      'Des milliers de personnes en France font confiance à Bio Elixir. Notre formule puissante "Magnésium Calme & Focus" soutient non seulement votre système nerveux, mais aide aussi à maintenir la sérénité et la concentration sans les effets secondaires courants.',
    benefits: [
      'Soutient le système nerveux',
      'Aide à réduire la fatigue passagère',
      'Favorise la relaxation et le bien-être',
      'Améliore la concentration et la clarté mentale',
    ],
    ingredients:
      'Magnésium bisglycinate (500mg), Vitamine B6, Extrait de passiflore, Gélule végétale (HPMC).',
    usageInstructions:
      'Prendre 2 gélules par jour avec un grand verre d\'eau, de préférence le soir. Ne pas dépasser la dose journalière recommandée.',
    deliveryEstimate: 'Livraison estimée le 15 janvier 2025',
    viewersCount: 26,
    countdownEndDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    additionalInfo: {
      shipping: 'Livraison gratuite à partir de 50€. Expédition sous 24-48h.',
      returns: 'Retours acceptés sous 30 jours. Satisfait ou remboursé.',
      payment: 'Paiement sécurisé par carte bancaire, PayPal ou virement.',
      exclusiveOffers: 'Code promo WELCOME10 pour 10% de réduction sur votre première commande.',
    },
  },
  {
    id: '2',
    slug: 'cellavie-magnesium-calme-focus-pack-duo',
    name: 'Bio Elixir Magnésium Calme & Focus (Pack Duo)',
    brand: 'Bio Elixir',
    price: 2695,
    originalPrice: 2995,
    image: '/client islam girl roman/hite.png',
    images: [
      '/client islam girl roman/hite.png',
      '/client islam girl roman/lequiiop.png',
      '/client islam girl roman/brown.png',
    ],
    category: 'Magnésium',
    productType: 'Gélules Végétales',
    need: 'Sommeil/Détente',
    inStock: true,
    isPromo: true,
    rating: 4.5,
    description:
      'Des milliers de personnes en France font confiance à Bio Elixir. Notre formule puissante "Magnésium Calme & Focus" soutient non seulement votre système nerveux, mais aide aussi à maintenir la sérénité et la concentration sans les effets secondaires courants.',
    benefits: [
      'Soutient le système nerveux',
      'Aide à réduire la fatigue passagère',
      'Favorise la relaxation et le bien-être',
      'Améliore la concentration et la clarté mentale',
    ],
    ingredients:
      'Magnésium bisglycinate (500mg), Vitamine B6, Extrait de passiflore, Gélule végétale (HPMC).',
    usageInstructions:
      'Prendre 2 gélules par jour avec un grand verre d\'eau, de préférence le soir. Ne pas dépasser la dose journalière recommandée.',
    deliveryEstimate: 'Livraison estimée le 15 janvier 2025',
    viewersCount: 18,
    countdownEndDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    additionalInfo: {
      shipping: 'Livraison gratuite à partir de 50€. Expédition sous 24-48h.',
      returns: 'Retours acceptés sous 30 jours. Satisfait ou remboursé.',
      payment: 'Paiement sécurisé par carte bancaire, PayPal ou virement.',
      exclusiveOffers: 'Code promo WELCOME10 pour 10% de réduction sur votre première commande.',
    },
  },
  {
    id: '3',
    slug: 'cellavie-omega-3-haute-purete',
    name: 'Bio Elixir Oméga 3 Haute Pureté',
    brand: 'Bio Elixir',
    price: 2895,
    originalPrice: 2895,
    image: '/client islam girl roman/Capture d’écran 2025-11-12 173640.png',
    images: [
      '/client islam girl roman/Capture d’écran 2025-11-12 173640.png',
      '/client islam girl roman/lequiiop.png',
      '/client islam girl roman/hite.png',
    ],
    category: 'Oméga 3',
    productType: 'Gélules Végétales',
    need: 'Vitalité/Énergie',
    inStock: true,
    isPromo: false,
    rating: 4.7,
    description:
      'Des milliers de personnes en France font confiance à Bio Elixir. Notre formule puissante "Oméga 3 Haute Pureté" soutient votre santé cardiovasculaire et cognitive pour une vitalité optimale.',
    benefits: [
      'Soutient la santé cardiovasculaire',
      'Favorise les fonctions cognitives',
      'Haute concentration en EPA et DHA',
      'Source d\'énergie naturelle',
    ],
    ingredients:
      'Huile de poisson sauvage (1000mg), EPA (300mg), DHA (200mg), Vitamine E naturelle, Gélule végétale.',
    usageInstructions:
      'Prendre 2 gélules par jour avec un repas, de préférence le matin. Ne pas dépasser la dose journalière recommandée.',
    deliveryEstimate: 'Livraison estimée le 15 janvier 2025',
    viewersCount: 22,
    additionalInfo: {
      shipping: 'Livraison gratuite à partir de 50€. Expédition sous 24-48h.',
      returns: 'Retours acceptés sous 30 jours. Satisfait ou remboursé.',
      payment: 'Paiement sécurisé par carte bancaire, PayPal ou virement.',
      exclusiveOffers: 'Code promo WELCOME10 pour 10% de réduction sur votre première commande.',
    },
  },
  {
    id: '4',
    slug: 'cellavie-omega-3-haute-purete-pack-duo',
    name: 'Bio Elixir Oméga 3 Haute Pureté (Pack Duo)',
    brand: 'Bio Elixir',
    price: 2695,
    originalPrice: 2895,
    image: '/client islam girl roman/brown.png',
    images: [
      '/client islam girl roman/brown.png',
      '/client islam girl roman/hite.png',
      '/client islam girl roman/lequiiop.png',
    ],
    category: 'Oméga 3',
    productType: 'Gélules Végétales',
    need: 'Vitalité/Énergie',
    inStock: true,
    isPromo: true,
    rating: 4.7,
    description:
      'Des milliers de personnes en France font confiance à Bio Elixir. Notre formule puissante "Oméga 3 Haute Pureté" soutient votre santé cardiovasculaire et cognitive pour une vitalité optimale.',
    benefits: [
      'Soutient la santé cardiovasculaire',
      'Favorise les fonctions cognitives',
      'Haute concentration en EPA et DHA',
      'Source d\'énergie naturelle',
    ],
    ingredients:
      'Huile de poisson sauvage (1000mg), EPA (300mg), DHA (200mg), Vitamine E naturelle, Gélule végétale.',
    usageInstructions:
      'Prendre 2 gélules par jour avec un repas, de préférence le matin. Ne pas dépasser la dose journalière recommandée.',
    deliveryEstimate: 'Livraison estimée le 15 janvier 2025',
    viewersCount: 15,
    countdownEndDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString(),
    additionalInfo: {
      shipping: 'Livraison gratuite à partir de 50€. Expédition sous 24-48h.',
      returns: 'Retours acceptés sous 30 jours. Satisfait ou remboursé.',
      payment: 'Paiement sécurisé par carte bancaire, PayPal ou virement.',
      exclusiveOffers: 'Code promo WELCOME10 pour 10% de réduction sur votre première commande.',
    },
  },
  {
    id: '5',
    slug: 'cellavie-gummies-immunite-enfants',
    name: 'Bio Elixir Gummies Immunité Enfants (Goût Sureau)',
    brand: 'Bio Elixir',
    price: 3435,
    originalPrice: 4058,
    image: '/client islam girl roman/lequiiop.png',
    images: [
      '/client islam girl roman/lequiiop.png',
      '/client islam girl roman/hite.png',
      '/client islam girl roman/brown.png',
    ],
    category: 'Immunité',
    productType: 'Gummies',
    need: 'Immunité',
    inStock: true,
    isPromo: true,
    rating: 4.8,
    description:
      'Des milliers de personnes en France font confiance à Bio Elixir. Notre formule puissante "Gummies Immunité Enfants" soutient le système immunitaire de vos enfants avec un délicieux goût sureau.',
    benefits: [
      'Renforce les défenses naturelles',
      'Goût sureau apprécié des enfants',
      'Sans colorants artificiels',
      'Formule adaptée aux enfants',
    ],
    ingredients:
      'Vitamine C (60mg), Zinc (5mg), Extrait de sureau, Sirop de glucose, Arôme naturel sureau.',
    usageInstructions:
      'Donner 2 gummies par jour aux enfants de 4 à 12 ans. À consommer de préférence le matin.',
    deliveryEstimate: 'Livraison estimée le 15 janvier 2025',
    viewersCount: 31,
    countdownEndDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(),
    additionalInfo: {
      shipping: 'Livraison gratuite à partir de 50€. Expédition sous 24-48h.',
      returns: 'Retours acceptés sous 30 jours. Satisfait ou remboursé.',
      payment: 'Paiement sécurisé par carte bancaire, PayPal ou virement.',
      exclusiveOffers: 'Code promo WELCOME10 pour 10% de réduction sur votre première commande.',
    },
  },
  {
    id: '6',
    slug: 'cellavie-gummies-immunite-adultes',
    name: 'Bio Elixir Gummies Immunité Adultes (Format Économique)',
    brand: 'Bio Elixir',
    price: 3435,
    originalPrice: 4058,
    image: '/client islam girl roman/hite.png',
    images: [
      '/client islam girl roman/hite.png',
      '/client islam girl roman/Capture d’écran 2025-11-12 173640.png',
      '/client islam girl roman/lequiiop.png',
    ],
    category: 'Immunité',
    productType: 'Gummies',
    need: 'Immunité',
    inStock: true,
    isPromo: true,
    rating: 4.6,
    description:
      'Des milliers de personnes en France font confiance à Bio Elixir. Notre formule puissante "Gummies Immunité Adultes" soutient votre système immunitaire toute l\'année avec un format économique.',
    benefits: [
      'Renforce les défenses naturelles',
      'Format économique (120 gummies)',
      'Goût agréable',
      'Sans gluten, sans OGM',
    ],
    ingredients:
      'Vitamine C (1000mg), Zinc (10mg), Quercétine, Extrait de sureau, Sirop de glucose, Arôme naturel.',
    usageInstructions:
      'Prendre 2 gummies par jour, de préférence le matin. Ne pas dépasser la dose journalière recommandée.',
    deliveryEstimate: 'Livraison estimée le 15 janvier 2025',
    viewersCount: 28,
    countdownEndDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    additionalInfo: {
      shipping: 'Livraison gratuite à partir de 50€. Expédition sous 24-48h.',
      returns: 'Retours acceptés sous 30 jours. Satisfait ou remboursé.',
      payment: 'Paiement sécurisé par carte bancaire, PayPal ou virement.',
      exclusiveOffers: 'Code promo WELCOME10 pour 10% de réduction sur votre première commande.',
    },
  },
  {
    id: '7',
    slug: 'cellavie-vitamine-d3-k2',
    name: 'Bio Elixir Vitamine D3 + K2',
    brand: 'Bio Elixir',
    price: 2495,
    originalPrice: 2795,
    image: '/client islam girl roman/Capture d’écran 2025-11-12 173640.png',
    images: [
      '/client islam girl roman/Capture d’écran 2025-11-12 173640.png',
      '/client islam girl roman/brown.png',
      '/client islam girl roman/hite.png',
    ],
    category: 'Vitamines',
    productType: 'Gélules Végétales',
    need: 'Immunité',
    inStock: true,
    isPromo: true,
    rating: 4.5,
    description:
      'Des milliers de personnes en France font confiance à Bio Elixir. Notre formule puissante "Vitamine D3 + K2" soutient votre système immunitaire et la santé osseuse.',
    benefits: [
      'Renforce le système immunitaire',
      'Soutient la santé osseuse',
      'Synergie D3 + K2 optimale',
      'Absorption maximale',
    ],
    ingredients:
      'Vitamine D3 (2000 UI), Vitamine K2 MK-7 (100µg), Huile de tournesol, Gélule végétale.',
    usageInstructions:
      'Prendre 1 gélule par jour avec un repas contenant des matières grasses, de préférence le matin.',
    deliveryEstimate: 'Livraison estimée le 15 janvier 2025',
    viewersCount: 19,
    countdownEndDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    additionalInfo: {
      shipping: 'Livraison gratuite à partir de 50€. Expédition sous 24-48h.',
      returns: 'Retours acceptés sous 30 jours. Satisfait ou remboursé.',
      payment: 'Paiement sécurisé par carte bancaire, PayPal ou virement.',
      exclusiveOffers: 'Code promo WELCOME10 pour 10% de réduction sur votre première commande.',
    },
  },
  {
    id: '8',
    slug: 'cellavie-probiotiques-digestion',
    name: 'Bio Elixir Probiotiques Digestion',
    brand: 'Bio Elixir',
    price: 3295,
    originalPrice: 3295,
    image: '/client islam girl roman/brown.png',
    images: [
      '/client islam girl roman/brown.png',
      '/client islam girl roman/lequiiop.png',
      '/client islam girl roman/Capture d’écran 2025-11-12 173640.png',
    ],
    category: 'Probiotiques',
    productType: 'Gélules Végétales',
    need: 'Digestion',
    inStock: true,
    isPromo: false,
    rating: 4.4,
    description:
      'Des milliers de personnes en France font confiance à Bio Elixir. Notre formule puissante "Probiotiques Digestion" soutient votre flore intestinale et votre bien-être digestif.',
    benefits: [
      'Soutient la flore intestinale',
      'Améliore la digestion',
      '10 souches probiotiques',
      'Résistance gastrique optimale',
    ],
    ingredients:
      '10 souches probiotiques (30 milliards UFC), Fructo-oligosaccharides (FOS), Gélule végétale résistante.',
    usageInstructions:
      'Prendre 1 gélule par jour à jeun le matin avec un verre d\'eau. Conserver au réfrigérateur après ouverture.',
    deliveryEstimate: 'Livraison estimée le 15 janvier 2025',
    viewersCount: 14,
    additionalInfo: {
      shipping: 'Livraison gratuite à partir de 50€. Expédition sous 24-48h.',
      returns: 'Retours acceptés sous 30 jours. Satisfait ou remboursé.',
      payment: 'Paiement sécurisé par carte bancaire, PayPal ou virement.',
      exclusiveOffers: 'Code promo WELCOME10 pour 10% de réduction sur votre première commande.',
    },
  },
]

const boutiqueProductTypeMap: Record<string, ProductType> = {
  'boutique-01': 'Liquides/Sérums',
  'boutique-02': 'Gélules Végétales',
  'boutique-03': 'Liquides/Sérums',
  'boutique-04': 'Liquides/Sérums',
  'boutique-05': 'Poudres',
  'boutique-06': 'Poudres',
}

const createAdditionalInfo = (): AdditionalInfo => ({
  shipping: 'Livraison nationale 58 wilayas sous 3 à 5 jours ouvrés.',
  returns: 'Retours acceptés sous 30 jours. Service client dédié Bio Elixir.',
  payment: 'Paiement sécurisé (CB, virement, paiement à la livraison).',
  exclusiveOffers: 'Tarif boutique fixe 8 500 DA.',
})

const boutiqueProducts: Product[] = boutiqueHighlights.flatMap((boutique, boutiqueIndex) => {
  const productType = boutiqueProductTypeMap[boutique.slug] ?? 'Liquides/Sérums'

  return boutique.products.map((product, productIndex) => {
    const image = product.imageSrc ?? '/p/1.jpg'
    const id = `boutique-${boutiqueIndex + 1}-${productIndex + 1}`

    return {
      id,
      slug: `${boutique.slug}-${productIndex + 1}`,
      name: `${boutique.tagline} — ${product.name}`,
      brand: 'Bio Elixir',
      price: 8500,
      image,
      images: [image],
      category: boutique.name,
      productType,
      inStock: true,
      isPromo: false,
      rating: 4.8,
      isNew: true,
      description: boutique.description,
      benefits: [product.summary],
      ingredients: 'Extraits de grenade Bio Elixir et formulations artisanales haut de gamme.',
      usageInstructions:
        'Utiliser ou déguster selon le rituel recommandé pour cette collection Bio Elixir.',
      deliveryEstimate: 'Livraison estimée sous 3 à 5 jours ouvrés vers les 58 wilayas.',
      viewersCount: 12 + boutiqueIndex * 4 + productIndex,
      additionalInfo: createAdditionalInfo(),
    }
  })
})

export const products: Product[] = [...baseProducts, ...boutiqueProducts]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export type SortOption = 'best-sellers' | 'price-asc' | 'price-desc' | 'newest' | 'highest-rated'

export type FilterState = {
  availability: 'all' | 'in-stock' | 'out-of-stock'
  brands: string[]
  priceRange: { min: number; max: number }
  productTypes: ProductType[]
  needs: ProductNeed[]
}

