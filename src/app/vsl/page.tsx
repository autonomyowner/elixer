import type { Metadata } from 'next'

const grenadePhaseOutputs = [
  "Extraction d'huile d'Oméga-5 (huile de pépins de grenade) à haute valeur ajoutée.",
  'Isolation de la punicalagine issue des écorces, un antioxydant naturel puissant.',
  'Production de jus et de mélasse de grenade (Dibs al-Rumman).',
  'Transformation des résidus en papier sulfurisé ou papier cuisson.',
  'Élaboration de savon antiseptique et antibactérien à base d’extrait de grenade.',
]

const alternateProduction = [
  'Production continue d’huiles naturelles rares (maïs, lin, sésame, avocat, argan, lavande, macadamia, etc.).',
  'Création de fruits séchés à haute valeur (abricot, figue, mangue, kiwi).',
  'Valorisation des résidus d’extraction en compléments alimentaires pour ruminants (gain de lait et de masse musculaire).',
]

const projectStrengths = [
  "Modèle d'économie circulaire valorisant chaque partie de la plante.",
  'Rentabilité portée par des produits premium prisés en pharmaceutique et cosmétique.',
  'Flexibilité industrielle grâce à des équipements polyvalents et évolutifs.',
]

const strategicExpansions = [
  'Élixirs thérapeutiques : Élexir de Stabilité, Élexir du Cœur, Élexir de la Mère, Élexir Jeunesse, Élexir de Thé glacé.',
  'Produits cosmétiques et de soin : masques, colorants (huile et poudre) et compléments à base de punicalagine.',
]

const financialOutlook = [
  {
    indicator: 'Investissement initial',
    minimal: '30 000 000 DZD',
    maximal: '100 000 000 DZD',
  },
  {
    indicator: 'Chiffre d’affaires espéré',
    minimal: '10 026 000 DZD',
    maximal: '430 000 000 DZD',
  },
  {
    indicator: 'Marge de profit nette',
    minimal: '5 000 000 DZD',
    maximal: '330 000 000 DZD',
  },
  {
    indicator: 'Pourcentage de marge',
    minimal: '30 %',
    maximal: '75,7 % – 85 %',
  },
]

export const metadata: Metadata = {
  title: 'Bio Elixir – Vision & Offre',
  description:
    'Découvrez le projet BIO Elixir : une production circulaire innovante autour de la grenade et des huiles naturelles.',
}

export default function VslPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-20">
        <section className="rounded-3xl border border-primary-200 bg-white/85 px-6 py-14 shadow-sm backdrop-blur sm:px-10">
          <p className="text-xs uppercase tracking-[0.4em] text-kitchen-brand-text">
            Offre principale
          </p>
          <h1 className="mt-4 text-4xl font-elegant font-semibold text-kitchen-brand-text sm:text-5xl">
            BIO Elixir : production circulaire et innovation végétale
          </h1>
          <p className="mt-6 text-base leading-relaxed text-kitchen-brand-text">
            Porté par Mme Boulad Hadjer (Batna, Algérie), le projet BIO Elixir s’inscrit dans
            une démarche d’économie circulaire reliant industries alimentaires et pharmaceutiques.
            L’objectif est de valoriser intégralement la grenade puis d’étendre l’expertise à
            d’autres plantes pour créer des gammes premium, durables et rentables.
          </p>
          <p className="mt-4 text-base leading-relaxed text-kitchen-brand-text">
            Le concept d’« Production Circulaire » exploite chaque partie de la plante :
            extraction d’actifs rares, recyclage des résidus et diversification continue.
            Cette approche garantit une occupation optimale des équipements sur douze mois
            et une montée en gamme progressive.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-8 rounded-3xl border border-primary-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-elegant font-semibold text-kitchen-brand-text">
              Saison de la grenade (3 mois)
            </h2>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-kitchen-brand-text">
              Exploitation intégrale de la matière première
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-kitchen-brand-text">
              {grenadePhaseOutputs.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-primary-200 bg-white/70 px-4 py-3 shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-elegant font-semibold text-kitchen-brand-text">
              Production alternée (9 mois)
            </h2>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-kitchen-brand-text">
              Diversification à haute valeur
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-kitchen-brand-text">
              {alternateProduction.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-primary-200 bg-white/70 px-4 py-3 shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-primary-200 bg-white/85 px-6 py-14 shadow-sm backdrop-blur sm:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-kitchen-brand-text">
            Vision commerciale
          </p>
          <h2 className="mt-4 text-3xl font-elegant font-semibold text-kitchen-brand-text sm:text-4xl">
            Avantages compétitifs et expansion stratégique
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {projectStrengths.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-primary-200 bg-white/75 px-5 py-6 text-sm leading-relaxed text-kitchen-brand-text shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-primary-200 bg-white/75 px-5 py-6 text-sm leading-relaxed text-kitchen-brand-text shadow-sm">
            <h3 className="text-lg font-semibold text-kitchen-brand-text">
              Perspectives d’expansion
            </h3>
            <ul className="mt-4 space-y-3">
              {strategicExpansions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-primary-200 bg-white/85 px-6 py-14 shadow-sm backdrop-blur sm:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-kitchen-brand-text">
            Projection financière
          </p>
          <h2 className="mt-4 text-3xl font-elegant font-semibold text-kitchen-brand-text sm:text-4xl">
            Deux scénarios pour lancer BIO Elixir
          </h2>
          <div className="mt-8 overflow-hidden rounded-3xl border border-primary-200 bg-white/80 shadow-sm">
            <table className="w-full text-left text-sm text-kitchen-brand-text">
              <thead className="bg-primary-100 text-xs uppercase tracking-[0.3em] text-kitchen-brand-text">
                <tr>
                  <th className="px-5 py-4">Indicateur</th>
                  <th className="px-5 py-4">Budget minimal</th>
                  <th className="px-5 py-4">Budget maximal</th>
                </tr>
              </thead>
              <tbody>
                {financialOutlook.map((row) => (
                  <tr key={row.indicator} className="border-t border-kitchen-lux-dark-green-100">
                    <td className="px-5 py-4 font-semibold text-kitchen-brand-text">
                      {row.indicator}
                    </td>
                    <td className="px-5 py-4">{row.minimal}</td>
                    <td className="px-5 py-4">{row.maximal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-kitchen-brand-text">
            L’objectif de croissance est fixé à +75 %. La structure financière démontre une
            marge nette pouvant atteindre 85 % selon le scénario d’investissement retenu.
          </p>
        </section>

        <section className="rounded-3xl border border-primary-200 bg-white/85 px-6 py-14 text-center shadow-sm backdrop-blur sm:px-10">
          <h2 className="text-3xl font-elegant font-semibold text-kitchen-brand-text sm:text-4xl">
            Prochaine étape
          </h2>
          <p className="mt-6 text-base leading-relaxed text-kitchen-brand-text">
            Souhaitez-vous approfondir l’une des phases ? Nous pouvons détailler la production
            d’huile, l’analyse financière ou l’expansion produit pour préparer la mise sur le marché.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/2130553666904"
              className="rounded-full bg-kitchen-brand-text px-10 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-colors duration-200 hover:bg-kitchen-brand-text-light"
            >
              Contacter Bio Elixir
            </a>
            <a
              href="tel:+2130553666904"
              className="rounded-full border border-kitchen-brand-text px-10 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-kitchen-brand-text transition-colors duration-200 hover:bg-kitchen-brand-text hover:text-white"
            >
              Appeler directement
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

