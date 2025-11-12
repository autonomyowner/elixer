export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="border-y border-kitchen-lux-dark-green-200 bg-white/80 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-black">
            Hygiène &amp; élixirs
          </p>
          <h2 className="mt-5 text-4xl font-elegant font-semibold text-kitchen-lux-dark-green-800 sm:text-5xl">
            L&apos;expérience Bio Elixir en images
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-kitchen-lux-dark-green-700">
            Plongez dans nos processus de fabrication : savon liquide antiseptique, spray STERI-GUARD et gammes
            d’élixirs à base de grenade pour un portefeuille transversal.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-kitchen-lux-dark-green-200 bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 shadow-lg">
            <video
              className="w-full h-auto"
              controls
              autoPlay
              loop
              muted
              playsInline
              poster="/picturs/hero.jpg"
            >
              <source src="/client islam girl roman/Soap_Video_Generation_Request.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
