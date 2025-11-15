import { BoutiqueImagePlaceholder } from '@/components/BoutiqueImagePlaceholder'

type BoutiqueItem = {
  name: string
  summary: string
  imageSrc?: string
}

const supplements: BoutiqueItem[] = [
  {
    name: 'Pure Omega Bio Elixir',
    summary:
      'Synergie à 85 % d’omega X complétée par oméga 6-9 végétaux, antioxydants lipophiles et graines de lin pour l’équilibre métabolique.',
    imageSrc: '/p/8.jpg',
  },
  {
    name: 'PUNICALAGIN Bio Elixir — Complément',
    summary:
      'Capsules concentrées en punicalagine titrée, pensées pour les protocoles nutraceutiques et la formulation premium.',
    imageSrc: '/p/9.jpg',
  },
  {
    name: 'PUNICALAGIN Bio Elixir — Additif',
    summary:
      'Poudre alimentaire/pharmaceutique, à intégrer dans des matrices fonctionnelles ou des sirops pharmaceutiques riches en antioxydants.',
    imageSrc: '/p/10.jpg',
  },
]

export default function Boutique02Page(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kitchen-white-soft via-white to-kitchen-warm-light py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="space-y-6 pb-12 text-kitchen-black-soft">
          <p className="text-xs uppercase tracking-[0.5em] text-kitchen-lux-dark-green-400">Boutique 02</p>
          <h1 className="font-elegant text-4xl text-kitchen-brand-text sm:text-5xl">
            Compléments &amp; antioxydants naturels
          </h1>
          <p className="text-base leading-relaxed text-kitchen-black-soft/80 sm:text-lg">
            Les formulations Bio Elixir associent punicalagine stabilisée, omégas végétaux et matrices botaniques pour
            créer des compléments prêts à intégrer vos gammes nutritionnelles, pharmaceutiques ou fonctionnelles.
          </p>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-kitchen-lux-dark-green-500">
            {['Qualité pharmaceutique', 'Actifs titrés', 'Traçabilité complète'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-kitchen-lux-dark-green-200 px-4 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </header>

        <div className="space-y-8">
          {supplements.map((item) => (
            <article
              key={item.name}
              className="rounded-[32px] border border-white/70 bg-white/90 p-8 shadow-lg shadow-kitchen-white-soft/60"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="flex-1 space-y-3">
                  <span className="text-[11px] uppercase tracking-[0.5em] text-kitchen-lux-dark-green-400">
                    nutraceutique
                  </span>
                  <h2 className="font-elegant text-3xl text-kitchen-brand-text">{item.name}</h2>
                  <p className="text-sm leading-relaxed text-kitchen-black-soft/80">{item.summary}</p>
                </div>
                <div className="flex-1">
                  <BoutiqueImagePlaceholder label={item.name} imageSrc={item.imageSrc} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

