import Link from 'next/link'
import { BoutiqueImagePlaceholder } from '@/components/BoutiqueImagePlaceholder'

type BoutiqueItem = {
  name: string
  summary: string
  imageSrc?: string
  imageDescription?: string
  badge?: string
}

type BoutiqueSection = {
  badge: string
  title: string
  description: string
  items: BoutiqueItem[]
}

const sections: BoutiqueSection[] = [
  {
    badge: 'collection signature',
    title: 'Élixirs de grenade pressés à froid',
    description:
      'Des jus formulés comme de véritables rituels bien-être : stabiliser la glycémie, soutenir l’énergie ou offrir un apaisement profond à la peau. Chaque référence est élaborée à partir d’extraits nobles et d’assemblages botaniques complémentaires.',
    items: [
      {
        name: 'Jus naturel de grenade (Naturel jus)',
        summary:
          'Pressage à froid, profil aromatique intense, teneur élevée en polyphénols pour un shot quotidien d’antioxydants.',
        imageSrc: '/p/1.jpg',
      },
      {
        name: 'Jus pour stabiliser la glycémie (Stability ELIXIR)',
        summary:
          'Assemblage léger riche en fibres solubles et actifs botaniques pour un rituel glycémique quotidien.',
        imageSrc: '/p/2.jpg',
      },
      {
        name: 'Jus énergétique (R3 Bio Elixir)',
        summary:
          'Formule tonifiante avec grenade, ginseng et minéraux pour relancer la vitalité avant l’effort.',
        imageSrc: '/p/3.jpg',
      },
      {
        name: 'Jus circulation & cœur (POME Heart Elixir)',
        summary:
          'Concentration ciblée en punicalagines et catéchines pour accompagner la microcirculation et la protection cardiovasculaire.',
        imageSrc: '/p/4.jpg',
      },
      {
        name: 'Jus apaisant peau (YOUTH ELIXIR)',
        summary:
          'Macérat doux grenade, aloe et pétales pour hydrater de l’intérieur et préserver l’éclat du teint.',
        imageSrc: '/p/5.jpg',
      },
      {
        name: 'Jus mère & enfant (Matri ELIXIR)',
        summary:
          'Élixir généreux en nutriments adaptés aux besoins maternels, complété par camomille et douceur botanique.',
        imageDescription:
          'A gentle, clean product shot of a glass juice bottle labeled "Matri ELIXIR" by "Bio Elixir", with soft pomegranate tones, perhaps next to a sprig of chamomile. Professional product photography, elegant composition, soft studio lighting, on a neutral grey textured surface, premium organic aesthetic, with swirling golden light particles, minimalist background.',
      },
      {
        name: 'Iced Tea ELIXIR',
        summary:
          'Infusion glacée grenade & thé noir, légèrement zestée, pensée pour l’hydratation sensorielle estivale.',
        imageSrc: '/p/6.jpg',
      },
    ],
  },
  {
    badge: 'atelier circulaire',
    title: 'Préparation & recyclage du déchet de grenade',
    description:
      'Notre atelier transforme les fibres de grenade en solutions premium pour l’univers culinaire et lifestyle.',
    items: [
      {
        name: 'Papier cuisson grenade',
        summary:
          'Papier cuisson teinté naturellement, résistant et non traité, idéal pour des créations culinaires propres et premium.',
        imageSrc: '/p/7.jpg',
      },
    ],
  },
]

export default function Boutique01Page(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kitchen-white-soft via-white to-kitchen-warm-light py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className="space-y-6 pb-12 text-kitchen-black-soft">
          <p className="text-xs uppercase tracking-[0.5em] text-kitchen-lux-dark-green-400">
            Boutique 01 — Jus &amp; Papier
          </p>
          <h1 className="font-elegant text-4xl text-kitchen-brand-text sm:text-5xl">
            Élixirs régénérants &amp; papeterie circulaire
          </h1>
          <p className="text-base leading-relaxed text-kitchen-black-soft/80 sm:text-lg">
            Chaque référence Bio Elixir est formulée comme un rituel sophistiqué : extraction douce, assemblages
            botaniques précis, traçabilité complète des sous-produits recyclés. Découvrez la palette complète dédiée à la
            grenade, de la boisson fonctionnelle à la matière papetière.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Pressage à froid', 'Traçabilité des cultures', 'Recyclage circulaire'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-kitchen-lux-dark-green-200 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-kitchen-lux-dark-green-700"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="https://wa.me/2130553666904?text=Bonjour%20Bio%20Elixir%20-%20je%20souhaite%20en%20savoir%20plus%20sur%20la%20Boutique%2001."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-kitchen-lux-dark-green-400 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-kitchen-lux-dark-green-700 transition hover:bg-kitchen-lux-dark-green-50"
            >
              Parler à un expert
            </a>
            <Link
              href="/services"
              className="text-sm uppercase tracking-[0.35em] text-kitchen-marble-gray hover:text-kitchen-brand-text"
            >
              Voir nos autres soins
            </Link>
          </div>
        </section>

        <div className="space-y-16">
          {sections.map((section) => (
            <section key={section.title} className="space-y-8 rounded-[36px] bg-white/80 p-8 shadow-lg shadow-kitchen-white-soft/70">
              <div className="space-y-3 text-kitchen-black-soft">
                <span className="text-[11px] uppercase tracking-[0.5em] text-kitchen-lux-dark-green-400">
                  {section.badge}
                </span>
                <h2 className="font-elegant text-3xl text-kitchen-brand-text">{section.title}</h2>
                <p className="text-base text-kitchen-black-soft/80">{section.description}</p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {section.items.map((item) => (
                  <article
                    key={item.name}
                    className="flex flex-col gap-6 rounded-[28px] border border-kitchen-white-soft bg-kitchen-white-clean/90 p-6"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-kitchen-marble-gray">{section.badge}</span>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-kitchen-brand-text/70">
                          Bio Elixir
                        </span>
                      </div>
                      <h3 className="font-elegant text-2xl text-kitchen-brand-text">{item.name}</h3>
                      <p className="text-sm leading-relaxed text-kitchen-black-soft/80">{item.summary}</p>
                    </div>
                    <BoutiqueImagePlaceholder
                      label={item.name}
                      imageSrc={item.imageSrc}
                      description={item.imageDescription}
                    />
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

