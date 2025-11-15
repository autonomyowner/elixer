import { BoutiqueImagePlaceholder } from '@/components/BoutiqueImagePlaceholder'

type BoutiqueExperience = {
  name: string
  summary: string
  imageSrc?: string
}

type BoutiqueCollection = {
  badge: string
  title: string
  description: string
  items: BoutiqueExperience[]
}

const collections: BoutiqueCollection[] = [
  {
    badge: 'spa & hammam',
    title: 'Rituels d’exception à la grenade',
    description:
      'Une ligne pensée pour les spas urbains, hammams traditionnels et maisons d’hôtes souhaitant une signature antioxydante harmonisée.',
    items: [
      {
        name: 'Gommage Onctueux Bio Elixir',
        summary:
          'Base sucre et poudre de grenade, infusée d’huiles essentielles chauffantes pour préparer la peau avant le bain de vapeur.',
        imageSrc: '/p/10.jpg',
      },
      {
        name: 'Savon Noir Grenade & Myrrhe',
        summary:
          'Un savon noir revisité, riche en polyphénols, qui enveloppe la peau d’un voile aromatique avant le rinçage rituel.',
        imageSrc: '/p/11.jpg',
      },
      {
        name: 'Huile de Modelage Rubis',
        summary:
          'Huile tiède à base de pépins de grenade pressés à froid, idéale pour les protocoles relaxants ou tonifiants.',
        imageSrc: '/p/12.jpg',
      },
    ],
  },
  {
    badge: 'hospitality design',
    title: 'Suites privées & corners bien-être',
    description:
      'Des coffrets signature prêts à être disposés dans les suites, espaces lounge ou boutiques d’hôtel.',
    items: [
      {
        name: 'Coffret Bain Visage & Corps',
        summary:
          'Duo mousse de douche & lait soyeux, packaging inspiré des stries de grenade pour une expérience multisensorielle.',
        imageSrc: '/p/13.jpg',
      },
      {
        name: 'Brume d’Ambiance Grenade Blanche',
        summary:
          'Diffusion discrète de notes florales et fruitées, parfaite pour rythmer les welcome rituals et les événements privés.',
        imageSrc: '/p/14.jpg',
      },
      {
        name: 'Mini-bar Fonctionnel',
        summary:
          'Sélection de shots élixirs (Stabilité, Jeunesse, Cœur) accompagnés de fiches storytelling à placer dans les suites.',
      },
    ],
  },
]

export default function Boutique04Page(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-kitchen-white-soft via-white to-kitchen-warm-light py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="space-y-6 pb-12 text-kitchen-black-soft">
          <p className="text-xs uppercase tracking-[0.5em] text-kitchen-lux-dark-green-400">Boutique 04</p>
          <h1 className="font-elegant text-4xl text-kitchen-brand-text sm:text-5xl">
            Spa privés, hammams &amp; hospitalité signature
          </h1>
          <p className="text-base leading-relaxed text-kitchen-black-soft/80 sm:text-lg">
            Nous équipons les maisons de bien-être avec des protocoles cohérents, faciles à mettre en scène et à raconter
            auprès de vos hôtes.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Protocoles clé en main', 'Retail prêt-à-placer', 'Storytelling sensoriel'].map((badge) => (
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
          {collections.map((collection) => (
            <section
              key={collection.title}
              className="space-y-8 rounded-[36px] border border-white/70 bg-white/90 p-8 shadow-lg shadow-kitchen-white-soft/60"
            >
              <div className="space-y-3">
                <span className="text-[11px] uppercase tracking-[0.5em] text-kitchen-marble-gray">{collection.badge}</span>
                <h2 className="font-elegant text-3xl text-kitchen-brand-text">{collection.title}</h2>
                <p className="text-sm leading-relaxed text-kitchen-black-soft/80">{collection.description}</p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {collection.items.map((item) => (
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


