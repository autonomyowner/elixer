import Image from 'next/image'

type TrustBadge = {
  title: string
  description: string
}

const trustBadges: TrustBadge[] = [
  {
    title: 'EXTRAITS DE GRENADE PURS',
    description: 'Chaque soin commence par une matière noble : punicalagine, tannins et actifs préservés.',
  },
  {
    title: 'STÉRILISATION CONTRÔLÉE',
    description: 'Processus aseptique pour nos savons liquides et sprays STERI-GUARD.',
  },
  {
    title: 'COLORATIONS NATURELLES',
    description: 'Henné de grenade et teintures capillaires sans compromis sur la santé du cheveu.',
  },
  {
    title: 'FORMULATION ANTIOXYDANTE',
    description: 'Crèmes et sérums conçus autour de la punicalagine pour une protection renforcée.',
  },
]

export const QualityCommitment = (): JSX.Element => {
  return (
    <section className="border-t border-kitchen-lux-dark-green-200 bg-white/70 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-black">
            Hygiène &amp; soins personnels
          </p>
          <h2 className="mt-5 text-4xl font-elegant font-semibold text-kitchen-lux-dark-green-800 sm:text-5xl">
            Des rituels inspirés par la grenade
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-kitchen-lux-dark-green-700">
            Notre projet évolue vers des formats liquides et cosmétiques : savons antiseptiques, sprays stériles,
            henné de grenade et sérums antioxydants. Chaque formule marie tradition et innovation pour protéger,
            réparer et sublimer la peau comme les cheveux.
          </p>
        </div>

        <div className="mt-16 mb-12 flex justify-center">
          <div className="relative w-full max-w-4xl aspect-[16/9] overflow-hidden rounded-[32px] border border-kitchen-lux-dark-green-200 bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 shadow-lg">
            <Image
              src="/client islam girl roman/1.jpg"
              alt="Soins personnels Bio Elixir à base de grenade"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <div
              key={badge.title}
              className="rounded-3xl border border-kitchen-lux-dark-green-200 bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 px-6 py-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-kitchen-lux-dark-green-200/20"
            >
              <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-kitchen-lux-dark-green-800">
                {badge.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-kitchen-lux-dark-green-700">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

