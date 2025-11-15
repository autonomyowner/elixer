import Image from 'next/image'

type BoutiqueImagePlaceholderProps = {
  label: string
  description?: string
  imageSrc?: string
}

export const BoutiqueImagePlaceholder = ({
  label,
  description,
  imageSrc,
}: BoutiqueImagePlaceholderProps): JSX.Element => {
  const caption = description ?? label

  if (imageSrc !== undefined) {
    return (
      <figure className="space-y-4">
        <div className="relative h-72 overflow-hidden rounded-[28px] border border-kitchen-white-soft bg-white/80">
          <Image
            src={imageSrc}
            alt={caption}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/20" />
        </div>
        <figcaption className="text-xs uppercase tracking-[0.3em] text-kitchen-marble-gray">
          {caption}
        </figcaption>
      </figure>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-dashed border-kitchen-lux-dark-green-200/80 bg-white/80 p-6 shadow-inner shadow-kitchen-lux-dark-green-200/40">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-x-6 top-6 h-24 rounded-full bg-gradient-to-r from-kitchen-lux-dark-green-100 via-white to-kitchen-lux-dark-green-100 blur-3xl" />
      </div>

      <div className="relative flex h-full flex-col justify-between space-y-4 text-kitchen-brand-text">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-kitchen-lux-dark-green-500">
            Visuel à insérer
          </p>
          <h4 className="mt-2 font-elegant text-2xl text-kitchen-lux-dark-green-800">{label}</h4>
          <p className="mt-3 text-sm leading-relaxed text-kitchen-lux-dark-green-700">
            {caption ?? 'Visuel en préparation.'}
          </p>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-kitchen-marble-gray">
          Espace réservé pour votre photo premium
        </p>
      </div>
    </div>
  )
}

