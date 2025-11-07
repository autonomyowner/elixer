import Image from 'next/image'

type TrustBadge = {
  title: string
  description: string
}

const trustBadges: TrustBadge[] = [
  {
    title: 'FORMULÉ EN FRANCE',
    description: 'Expertise scientifique et respect des normes européennes strictes.',
  },
  {
    title: 'INGRÉDIENTS ACTIFS PURS',
    description: 'Sourcing rigoureux pour une biodisponibilité maximale.',
  },
  {
    title: 'SANS OGM NI GLUTEN',
    description: 'Une transparence totale pour une consommation sereine.',
  },
  {
    title: 'FACILE À ASSIMILER',
    description: 'Des formats conçus pour une absorption optimale par votre corps.',
  },
]

export const QualityCommitment = (): JSX.Element => {
  return (
    <section className="border-t border-kitchen-lux-dark-green-200 bg-white/70 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-kitchen-lux-dark-green-600">
            Notre promesse
          </p>
          <h2 className="mt-5 text-4xl font-elegant font-semibold text-kitchen-lux-dark-green-800 sm:text-5xl">
            Excellence et Pureté Française
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-kitchen-lux-dark-green-700">
            Chez Cellavie, nous croyons que le bien-être commence par l&apos;intégrité des ingrédients. 
            C&apos;est pourquoi nous nous engageons à vous offrir des compléments qui allient le meilleur 
            de la nature et de la science, avec une exigence de qualité sans compromis.
          </p>
        </div>

        <div className="mt-16 mb-12 flex justify-center">
          <div className="relative w-full max-w-4xl aspect-[16/9] overflow-hidden rounded-[32px] border border-kitchen-lux-dark-green-200 bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 shadow-lg">
            <Image
              src="/unnamed (1).jpg"
              alt="Cellavie produits de qualité"
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

