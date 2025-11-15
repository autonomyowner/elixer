'use client'

export const PromotionalBanner = (): JSX.Element => {
  const message = 'Livraison 58 wilaya'

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] flex h-11 w-full items-center overflow-hidden px-4 text-sm font-semibold text-white transition-opacity"
      style={{
        background: 'linear-gradient(to right, #8B2635 0%, #A63D4A 50%, #8B2635 100%)',
        minHeight: '44px',
        height: '44px',
      }}
      aria-label="Navigation rapide vers les boutiques Bio Elixir"
    >
      <div className="relative flex w-full overflow-hidden">
        <div className="animate-scroll-banner inline-flex items-center gap-8 whitespace-nowrap uppercase tracking-[0.4em] text-white/90">
          {[...Array(4)].map((_, index) => (
            <span key={index} className="inline-flex items-center gap-4">
              <span>{message}</span>
              <span>•</span>
              <span>{message}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

