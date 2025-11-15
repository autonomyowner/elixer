import { BoutiqueImagePlaceholder } from '@/components/BoutiqueImagePlaceholder'

type BoutiqueItem = {
  name: string
  summary: string
  imageSrc?: string
}

const cosmeticItems: BoutiqueItem[] = [
  {
    name: 'HANNA Bio Elixir',
    summary:
      'Pâte végétale au henné de grenade, enrichie d’huiles protectrices pour des rituels capillaires profonds.',
    imageSrc: '/p/11.jpg',
  },
  {
    name: 'Mask Bio Elixir',
    summary:
      'Masque visage crème-argile, infusé de punicalagine et de pépins, pour lisser et reminéraliser l’épiderme.',
    imageSrc: '/p/12.jpg',
  },
  {
    name: 'Gamme de soins de la peau Bio Elixir',
    summary:
      'Collection sérum + crème + nettoyant aux hydrolats de grenade, calibrée pour les protocoles cabine et retail.',
    imageSrc: '/p/13.jpg',
  },
  {
    name: 'Collection de colorations capillaires Bio Elixir',
    summary:
      'Colorations végétales inspirées des tonalités grenade : rouges profonds, bruns chaleureux et reflets cuivrés.',
    imageSrc: '/p/14.jpg',
  },
]

export default function Boutique03Page(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kitchen-white-soft via-white to-kitchen-warm-light py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="space-y-6 pb-12 text-kitchen-black-soft">
          <p className="text-xs uppercase tracking-[0.5em] text-kitchen-lux-dark-green-400">Boutique 03</p>
          <h1 className="font-elegant text-4xl text-kitchen-brand-text sm:text-5xl">Cosmétique Bio Elixir</h1>
          <p className="text-base leading-relaxed text-kitchen-black-soft/80 sm:text-lg">
            Des formules sensorielles mêlant punicalagine, hydrolats et actifs botaniques pour accompagner spas,
            instituts et marques premium souhaitant une signature à la grenade.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Protocoles cabine', 'Actifs antioxydants', 'Textures sensorielles'].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-kitchen-lux-dark-green-200 px-4 py-2 text-xs uppercase tracking-[0.35em] text-kitchen-lux-dark-green-500"
              >
                {badge}
              </span>
            ))}
          </div>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {cosmeticItems.map((item) => (
            <article
              key={item.name}
              className="flex flex-col gap-5 rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-lg shadow-kitchen-white-soft/60"
            >
              <div className="space-y-3">
                <span className="text-[11px] uppercase tracking-[0.5em] text-kitchen-marble-gray">cosmétique</span>
                <h2 className="font-elegant text-3xl text-kitchen-brand-text">{item.name}</h2>
                <p className="text-sm leading-relaxed text-kitchen-black-soft/80">{item.summary}</p>
              </div>
              <BoutiqueImagePlaceholder label={item.name} imageSrc={item.imageSrc} />
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

