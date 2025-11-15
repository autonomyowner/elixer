import { BoutiqueImagePlaceholder } from '@/components/BoutiqueImagePlaceholder'

type BoutiqueItem = {
  name: string
  summary: string
  imageSrc?: string
}

type BoutiqueSection = {
  badge: string
  title: string
  description: string
  items: BoutiqueItem[]
}

const sections: BoutiqueSection[] = [
  {
    badge: 'pâtisserie signature',
    title: 'Collection Pâtisserie Bio Elixir',
    description:
      'Des recettes à la grenade imaginées pour les maisons de thé, chocolateries et corners gourmets souhaitant un storytelling antioxydant.',
    items: [
      {
        name: 'Chocolat Bio Elixir',
        summary:
          'Tablette grand cru, fèves sélectionnées, inclusion de graines de grenade séchées pour un contraste croquant.',
        imageSrc: '/p/15.jpg',
      },
      {
        name: 'Délices turcs Bio Elixir',
        summary:
          'Loukoums confectionnés à la main, garnis d’un cœur grenade-rose et présentés dans un coffret signature.',
        imageSrc: '/p/16.jpg',
      },
      {
        name: 'Bonbons Bio Elixir (gélifiés)',
        summary:
          'Confiseries gélifiées sans additifs artificiels, textures souples et saveur grenade intense.',
        imageSrc: '/p/17.jpg',
      },
      {
        name: 'Pâtisseries forme grenade',
        summary:
          'Mini entremets façonnés à la main, glaçage miroir rubis et décor botanique pour les vitrines haute-couture.',
        imageSrc: '/p/18.jpg',
      },
    ],
  },
  {
    badge: 'sélections sensorielles',
    title: 'Huiles essentielles & fruits séchés',
    description:
      'Des matières premières aromatiques et snacking pour compléter les corners bien-être et cadeaux culinaires.',
    items: [
      {
        name: 'Collection des huiles essentielles',
        summary:
          'Huiles précieuses en flacons ambrés (dont huile de pépins de grenade) pour soins cutanés, massages et parfums d’ambiance.',
        imageSrc: '/p/19.jpg',
      },
      {
        name: 'Collection des fruits séchés',
        summary:
          'Assortiments de fruits déshydratés premium, grenade, agrumes et pétales comestibles pour toppings et cadeaux.',
        imageSrc: '/p/20.jpg',
      },
    ],
  },
]

export default function Boutique05Page(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kitchen-white-soft via-white to-kitchen-warm-light py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="space-y-6 pb-12 text-kitchen-black-soft">
          <p className="text-xs uppercase tracking-[0.5em] text-kitchen-lux-dark-green-400">Boutique 05</p>
          <h1 className="font-elegant text-4xl text-kitchen-brand-text sm:text-5xl">
            Pâtisserie &amp; sélections sensorielles
          </h1>
          <p className="text-base leading-relaxed text-kitchen-black-soft/80 sm:text-lg">
            Une proposition complète pour les lieux gourmets : chocolats, loukoums, bonbons vibrants et matières
            premières aromatiques, tous infusés de la signature grenade Bio Elixir.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Recettes artisanales', 'Packaging premium', 'Expériences sensorielles'].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-kitchen-lux-dark-green-200 px-4 py-2 text-xs uppercase tracking-[0.35em] text-kitchen-lux-dark-green-500"
              >
                {badge}
              </span>
            ))}
          </div>
        </header>

        <div className="space-y-16">
          {sections.map((section) => (
            <section
              key={section.title}
              className="space-y-8 rounded-[36px] border border-white/70 bg-white/90 p-8 shadow-lg shadow-kitchen-white-soft/60"
            >
              <div className="space-y-3">
                <span className="text-[11px] uppercase tracking-[0.5em] text-kitchen-marble-gray">{section.badge}</span>
                <h2 className="font-elegant text-3xl text-kitchen-brand-text">{section.title}</h2>
                <p className="text-sm leading-relaxed text-kitchen-black-soft/80">{section.description}</p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                {section.items.map((item) => (
                  <article
                    key={item.name}
                    className="flex flex-col gap-5 rounded-[32px] border border-kitchen-white-soft bg-kitchen-white-clean/90 p-6"
                  >
                    <div className="space-y-3">
                      <h3 className="font-elegant text-2xl text-kitchen-brand-text">{item.name}</h3>
                      <p className="text-sm leading-relaxed text-kitchen-black-soft/80">{item.summary}</p>
                    </div>
                    <BoutiqueImagePlaceholder label={item.name} imageSrc={item.imageSrc} />
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

