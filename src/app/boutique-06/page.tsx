import { BoutiqueImagePlaceholder } from '@/components/BoutiqueImagePlaceholder'

const item = {
  name: 'Complément alimentaire pour ruminants',
  summary:
    'Nutrition circulaire combinant sous-produits de grenade, céréales et levures pour stimuler la production lactée et la masse musculaire des ruminants.',
  imageSrc: '/p/21.jpg',
}

export default function Boutique06Page(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kitchen-white-soft via-white to-kitchen-warm-light py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="space-y-6 pb-12 text-kitchen-black-soft">
          <p className="text-xs uppercase tracking-[0.5em] text-kitchen-lux-dark-green-400">Boutique 06</p>
          <h1 className="font-elegant text-4xl text-kitchen-brand-text sm:text-5xl">
            Compléments agro-nutritionnels
          </h1>
          <p className="text-base leading-relaxed text-kitchen-black-soft/80 sm:text-lg">
            Bio Elixir valorise les co-produits de l’usine pour élaborer un complément technique destiné aux ruminants,
            idéal pour les élevages recherchant performance, bien-être animal et circularité.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Valorisation des coproduits', 'Performance lactée', 'Nutrition responsable'].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-kitchen-lux-dark-green-200 px-4 py-2 text-xs uppercase tracking-[0.35em] text-kitchen-lux-dark-green-500"
              >
                {badge}
              </span>
            ))}
          </div>
        </header>

        <article className="rounded-[36px] border border-white/70 bg-white/90 p-8 shadow-lg shadow-kitchen-white-soft/60">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex-1 space-y-4">
              <span className="text-[11px] uppercase tracking-[0.5em] text-kitchen-marble-gray">agro nutrition</span>
              <h2 className="font-elegant text-3xl text-kitchen-brand-text">{item.name}</h2>
              <p className="text-sm leading-relaxed text-kitchen-black-soft/80">{item.summary}</p>
              <ul className="space-y-2 text-sm text-kitchen-black-soft/70">
                <li>• Mélange pelletisé facile à distribuer dans les rations quotidiennes.</li>
                <li>• Apport renforcé en polyphénols issus de la grenade pour le confort digestif.</li>
                <li>• Stratégie circulaire limitant l’empreinte environnementale de l’élevage.</li>
              </ul>
            </div>
            <div className="flex-1">
              <BoutiqueImagePlaceholder label={item.name} imageSrc={item.imageSrc} />
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

