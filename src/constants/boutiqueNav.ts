export type BoutiqueNavItem = {
  label: string
  href: string
}

export const boutiqueNavItems: BoutiqueNavItem[] = [
  { label: 'Élixirs & Papier', href: '/boutique-01' },
  { label: 'Compléments Bio', href: '/boutique-02' },
  { label: 'Cosmétique Pro', href: '/boutique-03' },
  { label: 'Spa & Hospitality', href: '/boutique-04' },
  { label: 'Pâtisserie Sensorielle', href: '/boutique-05' },
  { label: 'Agro Nutrition', href: '/boutique-06' },
]

export const boutiqueButtonBaseClass =
  'inline-flex items-center justify-center rounded-full border border-kitchen-lux-dark-green-300 bg-gradient-to-r from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 px-2 py-1 text-[7px] font-semibold uppercase tracking-[0.25em] text-kitchen-lux-dark-green-800 transition-all duration-200 hover:border-kitchen-lux-dark-green-500 hover:bg-gradient-to-r hover:from-kitchen-lux-dark-green-100 hover:to-kitchen-lux-dark-green-200 hover:text-kitchen-lux-dark-green-900 hover:shadow-md hover:shadow-kitchen-lux-dark-green-200/30 md:px-4 md:py-2 md:text-[10px]'

export const boutiqueButtonActiveClass =
  'border-kitchen-lux-dark-green-500 bg-gradient-to-r from-kitchen-lux-dark-green-100 to-kitchen-lux-dark-green-200 text-kitchen-lux-dark-green-900 shadow-md shadow-kitchen-lux-dark-green-200/30'

export const bannerBoutiqueButtonBaseClass =
  'inline-flex flex-shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/15 px-2 py-0.5 text-[6.5px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-200 hover:border-white/70 hover:bg-white/25 md:px-3 md:text-[8px]'

export const bannerBoutiqueButtonActiveClass =
  'border-white/80 bg-white/35 text-white shadow-sm shadow-white/40'


