export type BoutiqueProduct = {
  name: string
  summary: string
  imageSrc?: string
}

export type BoutiqueHighlight = {
  slug: string
  name: string
  tagline: string
  description: string
  products: BoutiqueProduct[]
}

export const boutiqueHighlights: BoutiqueHighlight[] = [
  {
    slug: 'boutique-01',
    name: 'Boutique 01 — Élixirs régénérants & papeterie circulaire',
    tagline: 'Élixirs & Papier',
    description:
      'Pressages à froid, assemblages botaniques et recyclage des fibres de grenade pour des boissons fonctionnelles et une papeterie premium.',
    products: [
      {
        name: 'Jus naturel de grenade',
        summary: 'Pressage à froid riche en polyphénols pour un shot quotidien d’antioxydants.',
        imageSrc: '/p/1.jpg',
      },
      {
        name: 'Stability ELIXIR',
        summary: 'Assemblage léger, fibres solubles et actifs botaniques pour la régulation glycémique.',
        imageSrc: '/p/2.jpg',
      },
      {
        name: 'Papier cuisson grenade',
        summary: 'Papier teinté naturellement à partir de fibres de grenade recyclées.',
        imageSrc: '/p/7.jpg',
      },
    ],
  },
  {
    slug: 'boutique-02',
    name: 'Boutique 02 — Compléments & antioxydants naturels',
    tagline: 'Compléments Bio',
    description:
      'Actifs titrés en punicalagine, omégas végétaux et matrices nutraceutiques prêts à intégrer vos gammes fonctionnelles.',
    products: [
      {
        name: 'Pure Omega Bio Elixir',
        summary: 'Synergie d’omégas végétaux pour l’équilibre métabolique quotidien.',
        imageSrc: '/p/8.jpg',
      },
      {
        name: 'Punicalagin Bio Elixir (Capsules)',
        summary: 'Concentré antioxydant premium pour protocoles nutraceutiques.',
        imageSrc: '/p/9.jpg',
      },
      {
        name: 'Punicalagin Bio Elixir (Additif)',
        summary: 'Poudre fonctionnelle prête à formuler dans vos sirops et boissons.',
        imageSrc: '/p/10.jpg',
      },
    ],
  },
  {
    slug: 'boutique-03',
    name: 'Boutique 03 — Cosmétique Bio Elixir',
    tagline: 'Cosmétique Pro',
    description:
      'Protocoles cabine, hydrolats de grenade et textures sensorielles pour spas et instituts haut de gamme.',
    products: [
      {
        name: 'HANNA Bio Elixir',
        summary: 'Pâte végétale au henné de grenade pour rituels capillaires profonds.',
        imageSrc: '/p/11.jpg',
      },
      {
        name: 'Mask Bio Elixir',
        summary: 'Masque visage crème-argile infusé de punicalagine et de pépins.',
        imageSrc: '/p/12.jpg',
      },
      {
        name: 'Gamme de soins de la peau',
        summary: 'Sérum, crème et nettoyant aux hydrolats de grenade pour la cabine.',
        imageSrc: '/p/13.jpg',
      },
    ],
  },
  {
    slug: 'boutique-04',
    name: 'Boutique 04 — Spa privés & hospitalité signature',
    tagline: 'Spa & Hospitality',
    description:
      'Rituels d’exception et coffrets prêts-à-placer pour hammams, suites privées et maisons d’hôtes.',
    products: [
      {
        name: 'Gommage Onctueux Bio Elixir',
        summary: 'Base sucre et poudre de grenade pour préparer le corps au bain de vapeur.',
        imageSrc: '/p/10.jpg',
      },
      {
        name: 'Savon Noir Grenade & Myrrhe',
        summary: 'Savon noir revisité, riche en polyphénols et en notes aromatiques.',
        imageSrc: '/p/11.jpg',
      },
      {
        name: 'Coffret Bain Visage & Corps',
        summary: 'Duo mousse de douche et lait soyeux pour les suites premium.',
        imageSrc: '/p/13.jpg',
      },
    ],
  },
  {
    slug: 'boutique-05',
    name: 'Boutique 05 — Pâtisserie & sélections sensorielles',
    tagline: 'Pâtisserie Sensorielle',
    description:
      'Chocolats, loukoums, gélifiés et matières aromatiques pour corners gourmets et cadeaux signature.',
    products: [
      {
        name: 'Chocolat Bio Elixir',
        summary: 'Tablette grand cru avec inclusion de graines de grenade séchées.',
        imageSrc: '/p/15.jpg',
      },
      {
        name: 'Délices turcs Bio Elixir',
        summary: 'Loukoums grenade-rose confectionnés à la main.',
        imageSrc: '/p/16.jpg',
      },
      {
        name: 'Huiles essentielles Bio Elixir',
        summary: 'Flacons aromatiques à base de pépins de grenade pour soins cutanés.',
        imageSrc: '/p/19.jpg',
      },
    ],
  },
  {
    slug: 'boutique-06',
    name: 'Boutique 06 — Compléments agro-nutritionnels',
    tagline: 'Agro Nutrition',
    description:
      'Valorisation des co-produits de grenade pour la nutrition animale circulaire et performante.',
    products: [
      {
        name: 'Complément ruminants Bio Elixir',
        summary: 'Mélange pelletisé stimulant production lactée et confort digestif.',
        imageSrc: '/p/21.jpg',
      },
    ],
  },
]


