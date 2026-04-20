export interface ServiceSEO {
  id: number
  seoSlug: string
  title: string
  metaTitle: string
  metaDescription: string
  h1: string
  description: string
  prestations: string[]
  areas: string[]
  faqs: { question: string; answer: string }[]
  relatedBlogSlugs: string[]
  imageAlt: string
}

export const servicesSEO: ServiceSEO[] = [
  {
    id: 1,
    seoSlug: 'electricien-argenteuil',
    title: 'Électricité et Mise aux Normes',
    metaTitle: 'Électricien Argenteuil — Installation & Mise aux Normes',
    metaDescription:
      'Électricien à Argenteuil et Val-d\'Oise. Installation électrique, mise aux normes NF C 15-100, tableau électrique, dépannage. Devis gratuit — Horizon Habitat Projet.',
    h1: 'Électricien à Argenteuil — Installation & Mise aux Normes Électrique',
    description:
      'Artisan électricien qualifié intervenant à Argenteuil et dans tout le Val-d\'Oise. Installation de nouveaux circuits, réfection complète, mise aux normes NF C 15-100, remplacement de tableau électrique, dépannage et réparation.',
    prestations: [
      'Installation de tableaux électriques et disjoncteurs',
      'Mise aux normes NF C 15-100 (logements anciens)',
      'Création et remplacement de circuits électriques',
      'Pose de prises, interrupteurs et éclairages',
      'Câblage et raccordements lors de rénovations',
      'Dépannage et diagnostic électrique',
      'Installation de prises RJ45, TV, domotique',
    ],
    areas: [
      'Argenteuil', 'Cergy', 'Saint-Gratien', 'Sartrouville',
      'Cormeilles-en-Parisis', 'Herblay', 'Ermont', 'Enghien-les-Bains',
      'Sannois', 'Franconville', 'Eaubonne',
    ],
    faqs: [
      {
        question: 'Quel est le prix d\'une mise aux normes électrique à Argenteuil ?',
        answer:
          'Le coût d\'une mise aux normes électrique à Argenteuil varie selon la superficie et l\'état de l\'installation existante. Comptez entre 1 500 € et 4 000 € pour un appartement standard (T2/T3). Nous réalisons un diagnostic gratuit et un devis détaillé avant toute intervention.',
      },
      {
        question: 'Combien de temps dure une installation électrique complète ?',
        answer:
          'Pour un appartement de 50 à 80 m², une installation électrique complète prend généralement 2 à 4 jours. Nous travaillons en minimisant les nuisances et vous rendons le logement fonctionnel à chaque fin de journée.',
      },
      {
        question: 'Intervenez-vous en urgence pour un dépannage électrique à Argenteuil ?',
        answer:
          'Oui, Horizon Habitat Projet intervient rapidement pour les dépannages électriques à Argenteuil et dans les communes voisines. Contactez-nous au 07 66 41 56 39 pour convenir d\'un rendez-vous dans les meilleurs délais.',
      },
      {
        question: 'Quelles normes respectez-vous pour les travaux d\'électricité ?',
        answer:
          'Tous nos travaux électriques respectent la norme NF C 15-100 en vigueur en France. Nos artisans sont qualifiés et nos installations peuvent être certifiées Consuel pour la mise en service ou lors d\'une vente immobilière.',
      },
      {
        question: 'Puis-je bénéficier d\'aides pour la rénovation électrique de mon logement ?',
        answer:
          'Oui, sous conditions de ressources, vous pouvez bénéficier de MaPrimeRénov\' ou d\'aides de l\'Anah pour la rénovation électrique. Nous vous accompagnons dans les démarches pour les logements dans le Val-d\'Oise (95).',
      },
    ],
    relatedBlogSlugs: ['mise-aux-normes-electrique-argenteuil', 'budget-renovation-appartement-idf-2025'],
    imageAlt: 'Électricien Argenteuil — intervention tableau électrique',
  },
  {
    id: 2,
    seoSlug: 'peinture-argenteuil',
    title: 'Peinture et Décoration Intérieure',
    metaTitle: 'Peintre Argenteuil — Peinture Intérieure & Décoration',
    metaDescription:
      'Peintre professionnel à Argenteuil et Île-de-France. Peinture intérieure, enduits, papier peint, ravalement. Finitions soignées. Devis gratuit — Horizon Habitat Projet.',
    h1: 'Peintre à Argenteuil — Peinture Intérieure & Décoration',
    description:
      'Artisan peintre en bâtiment intervenant à Argenteuil et dans tout le Val-d\'Oise. Peinture de murs, plafonds et boiseries, application d\'enduits décoratifs, pose de papier peint, finitions haut de gamme pour appartements et maisons.',
    prestations: [
      'Peinture murs et plafonds (appartement, maison)',
      'Préparation des supports (rebouchage, ponçage, enduit)',
      'Application d\'enduits décoratifs et béton ciré',
      'Pose de papier peint et revêtements muraux',
      'Peinture de boiseries, portes et menuiseries',
      'Ravalement de façade et peinture extérieure',
      'Conseils couleurs et tendances déco 2025',
    ],
    areas: [
      'Argenteuil', 'Cergy', 'Saint-Gratien', 'Sartrouville',
      'Cormeilles-en-Parisis', 'Herblay', 'Ermont', 'Enghien-les-Bains',
      'Bois-Colombes', 'Asnières-sur-Seine', 'Colombes',
    ],
    faqs: [
      {
        question: 'Quel est le prix d\'une peinture intérieure à Argenteuil ?',
        answer:
          'Le tarif de la peinture intérieure à Argenteuil est généralement compris entre 25 et 45 €/m² (surfaces préparées, deux couches, finition soignée). Le prix final dépend de l\'état des supports et des produits choisis. Nous fournissons un devis gratuit et détaillé.',
      },
      {
        question: 'Combien de temps faut-il pour peindre un appartement de 60 m² ?',
        answer:
          'Pour un appartement de 60 m² en bon état, comptez 3 à 5 jours de travaux (préparation + application). Nous protégeons systématiquement vos meubles et sols et laissons le logement propre en fin de chantier.',
      },
      {
        question: 'Proposez-vous la pose de papier peint à Argenteuil ?',
        answer:
          'Oui, nous posons tous types de revêtements muraux : papier peint classique, intissé, panoramique, vinyle et revêtements tissés. Nous intervenons à Argenteuil et dans toutes les communes du Val-d\'Oise.',
      },
      {
        question: 'Quelle peinture recommandez-vous pour une salle de bain ?',
        answer:
          'Pour une salle de bain, nous recommandons des peintures glycéro ou acrylique spécial pièces humides, avec un traitement anti-moisissures. Nous conseillons aussi le béton ciré ou le carrelage peint pour un résultat haut de gamme et durable.',
      },
    ],
    relatedBlogSlugs: ['peinture-agrandir-appartement-tendances-2025', 'budget-renovation-appartement-idf-2025'],
    imageAlt: 'Peintre Argenteuil — peinture intérieure appartement',
  },
  {
    id: 3,
    seoSlug: 'renovation-interieur-argenteuil',
    title: 'Rénovation Intérieure',
    metaTitle: 'Rénovation Intérieure Argenteuil — Artisan Spécialisé',
    metaDescription:
      'Rénovation intérieure à Argenteuil et Île-de-France. Appartement, maison, cuisine, salle de bain, peinture, électricité. Devis gratuit — Horizon Habitat Projet.',
    h1: 'Rénovation Intérieure à Argenteuil — Tous Corps de Métier',
    description:
      'Horizon Habitat Projet est votre artisan de confiance pour la rénovation intérieure à Argenteuil et en Île-de-France. Nous prenons en charge vos projets de A à Z : cuisine, salle de bain, peinture, électricité, carrelage et aménagement intérieur.',
    prestations: [
      'Rénovation complète appartement et maison',
      'Rénovation de cuisine sur mesure',
      'Rénovation de salle de bain',
      'Travaux de peinture et décoration',
      'Installation et mise aux normes électrique',
      'Pose de carrelage, parquet et revêtements',
      'Aménagement intérieur et cloisons',
      'Verrière intérieure et cloison vitrée',
    ],
    areas: [
      'Argenteuil', 'Cergy', 'Saint-Gratien', 'Sartrouville',
      'Cormeilles-en-Parisis', 'Herblay', 'Ermont', 'Enghien-les-Bains',
      'Pontoise', 'Val-d\'Oise (95)', 'Île-de-France',
    ],
    faqs: [
      {
        question: 'Quel est le prix d\'une rénovation complète à Argenteuil ?',
        answer:
          'Le coût d\'une rénovation complète à Argenteuil varie selon l\'ampleur des travaux. Comptez en moyenne 500 à 1 200 €/m² pour une rénovation totale (électricité, plomberie, revêtements, peinture). Nous établissons un devis gratuit et personnalisé après visite.',
      },
      {
        question: 'Combien de temps durent des travaux de rénovation intérieure ?',
        answer:
          'Pour un appartement de 50 m², une rénovation complète prend entre 3 et 6 semaines selon les corps de métier impliqués. Nous planifions les travaux pour minimiser votre inconfort et respectons les délais convenus.',
      },
      {
        question: 'Intervenez-vous dans tout le Val-d\'Oise ?',
        answer:
          'Oui, Horizon Habitat Projet intervient dans tout le Val-d\'Oise (95) : Argenteuil, Cergy, Saint-Gratien, Sartrouville, Cormeilles-en-Parisis, Herblay, Ermont, Enghien-les-Bains et les communes alentour.',
      },
      {
        question: 'Proposez-vous des rénovations dans des appartements occupés ?',
        answer:
          'Oui, nous réalisons des travaux de rénovation en logement occupé. Nous organisons le chantier par zones et par phases pour vous permettre de continuer à vivre dans votre appartement pendant les travaux.',
      },
      {
        question: 'Puis-je bénéficier d\'aides pour rénover mon logement en Île-de-France ?',
        answer:
          'Plusieurs aides sont disponibles : MaPrimeRénov\', éco-PTZ, aides de l\'Anah et subventions du Conseil Régional Île-de-France. Nous vous guidons dans vos démarches pour maximiser vos aides selon votre situation.',
      },
    ],
    relatedBlogSlugs: [
      'budget-renovation-appartement-idf-2025',
      'artisan-confiance-renovation-argenteuil',
      'aides-renovation-val-d-oise-95',
    ],
    imageAlt: 'Rénovation intérieure Argenteuil — chantier appartement',
  },
  {
    id: 4,
    seoSlug: 'carrelage-argenteuil',
    title: 'Carrelage et Revêtements Sol & Mur',
    metaTitle: 'Carreleur Argenteuil — Pose Carrelage & Revêtements',
    metaDescription:
      'Carreleur professionnel à Argenteuil. Pose carrelage sol et mur, parquet, revêtements PVC. Travail soigné et garanti. Devis gratuit — Horizon Habitat Projet.',
    h1: 'Carreleur à Argenteuil — Pose de Carrelage, Parquet & Revêtements',
    description:
      'Artisan carreleur qualifié intervenant à Argenteuil et dans le Val-d\'Oise. Pose de carrelage sol et mural, parquet massif ou stratifié, sol PVC, faïence de salle de bain et cuisine. Travail soigné avec des matériaux de qualité.',
    prestations: [
      'Pose de carrelage sol (grès cérame, pierre naturelle, faïence)',
      'Pose de carrelage mural (cuisine, salle de bain)',
      'Installation de parquet massif, stratifié ou contrecollé',
      'Pose de sol PVC et vinyl',
      'Ragréage et préparation des supports',
      'Rénovation de sols existants',
      'Pose de plinthes et finitions',
    ],
    areas: [
      'Argenteuil', 'Cergy', 'Saint-Gratien', 'Sartrouville',
      'Cormeilles-en-Parisis', 'Herblay', 'Ermont', 'Enghien-les-Bains',
      'Sannois', 'Franconville',
    ],
    faqs: [
      {
        question: 'Quel est le prix de la pose de carrelage à Argenteuil ?',
        answer:
          'Le tarif de la pose de carrelage à Argenteuil est généralement compris entre 35 et 70 €/m² (main d\'œuvre), selon la complexité de la pose (rectifié, grand format, motif). La fourniture du carrelage est en sus. Nous vous fournissons un devis détaillé gratuit.',
      },
      {
        question: 'Combien de temps faut-il pour poser du carrelage dans une salle de bain ?',
        answer:
          'Pour une salle de bain standard (5 à 8 m²), la pose complète (sol + mur) prend généralement 3 à 5 jours, incluant la préparation du support et le temps de séchage des joints.',
      },
      {
        question: 'Posez-vous aussi du parquet à Argenteuil ?',
        answer:
          'Oui, nous posons tous types de parquet : massif, contrecollé, stratifié, ainsi que les sols PVC et vinyl. Nous recommandons les matériaux les mieux adaptés à votre usage et à votre budget.',
      },
      {
        question: 'Peut-on poser du carrelage sur un ancien carrelage ?',
        answer:
          'C\'est possible dans certains cas, à condition que l\'ancien carrelage soit bien adhérent et que la hauteur supplémentaire soit compatible avec vos portes et plinthes. Nous réalisons systématiquement un diagnostic avant toute recommandation.',
      },
    ],
    relatedBlogSlugs: ['revetement-sol-parquet-carrelage-vinyle-idf', 'budget-renovation-appartement-idf-2025'],
    imageAlt: 'Carreleur Argenteuil — pose carrelage salle de bain',
  },
  {
    id: 5,
    seoSlug: 'salle-de-bain-argenteuil',
    title: 'Rénovation de Salle de Bain',
    metaTitle: 'Rénovation Salle de Bain Argenteuil — Artisan Qualifié',
    metaDescription:
      'Rénovation salle de bain à Argenteuil et Val-d\'Oise. Carrelage, douche, baignoire, robinetterie, meuble vasque. Devis gratuit — Horizon Habitat Projet.',
    h1: 'Rénovation Salle de Bain à Argenteuil — Création & Transformation',
    description:
      'Artisan spécialisé dans la rénovation et création de salles de bain à Argenteuil et en Île-de-France. Pose de carrelage mural et au sol, installation de douche à l\'italienne, baignoire, meuble vasque, robinetterie, raccordements plomberie.',
    prestations: [
      'Rénovation complète de salle de bain',
      'Installation de douche à l\'italienne',
      'Pose de baignoire et robinetterie',
      'Carrelage mural et au sol',
      'Installation de meuble vasque et miroir',
      'Raccordements plomberie',
      'Ventilation et évacuation (VMC)',
      'Éclairage salle de bain',
    ],
    areas: [
      'Argenteuil', 'Cergy', 'Saint-Gratien', 'Sartrouville',
      'Cormeilles-en-Parisis', 'Herblay', 'Ermont', 'Enghien-les-Bains',
      'Pontoise', 'Val-d\'Oise (95)',
    ],
    faqs: [
      {
        question: 'Quel est le prix d\'une rénovation de salle de bain à Argenteuil ?',
        answer:
          'Le coût d\'une rénovation de salle de bain à Argenteuil varie entre 3 000 € et 12 000 € selon la superficie, les matériaux et les équipements choisis. Une rénovation complète d\'une salle de bain de 5 m² est estimée entre 4 000 € et 7 000 €. Devis gratuit sur demande.',
      },
      {
        question: 'Combien de temps dure une rénovation de salle de bain ?',
        answer:
          'Une rénovation complète de salle de bain prend généralement 5 à 10 jours ouvrés selon l\'ampleur des travaux (démolition, plomberie, carrelage, équipements). Nous planifions le chantier pour limiter la durée d\'indisponibilité de votre salle de bain.',
      },
      {
        question: 'Réalisez-vous l\'installation de douche à l\'italienne ?',
        answer:
          'Oui, la douche à l\'italienne est l\'une de nos spécialités. Nous gérons l\'ensemble des travaux : création du receveur, étanchéité, carrelage, robinetterie et vitre ou paroi. Nous conseillons sur les matériaux les plus adaptés à votre espace.',
      },
      {
        question: 'Puis-je transformer ma baignoire en douche à Argenteuil ?',
        answer:
          'Oui, la transformation baignoire en douche à l\'italienne est une prestation courante que nous réalisons à Argenteuil et dans le Val-d\'Oise. C\'est une solution idéale pour moderniser votre salle de bain et gagner de la place.',
      },
      {
        question: 'Y a-t-il des aides pour rénover une salle de bain dans le Val-d\'Oise ?',
        answer:
          'Sous certaines conditions, MaPrimeRénov\' et les aides de l\'Anah peuvent financer une partie de la rénovation de salle de bain, notamment pour l\'adaptation aux personnes à mobilité réduite. Nous vous aidons à identifier les aides disponibles.',
      },
    ],
    relatedBlogSlugs: [
      'salle-de-bain-appartement-haussmannien-idf',
      'renovation-cuisine-argenteuil-prix',
      'aides-renovation-val-d-oise-95',
    ],
    imageAlt: 'Rénovation salle de bain Argenteuil — douche à l\'italienne',
  },
  {
    id: 6,
    seoSlug: 'pose-cuisine-argenteuil',
    title: 'Cuisine sur Mesure',
    metaTitle: 'Cuisiniste Argenteuil — Pose & Rénovation Cuisine',
    metaDescription:
      'Cuisiniste à Argenteuil et Val-d\'Oise. Pose de cuisine sur mesure, aménagement, plan de travail, électroménager. Devis gratuit — Horizon Habitat Projet.',
    h1: 'Cuisiniste à Argenteuil — Pose & Rénovation de Cuisine sur Mesure',
    description:
      'Artisan cuisiniste à Argenteuil et en Île-de-France. Conception, fourniture et installation de cuisines sur mesure ou équipées. Plans 3D, choix des meubles et équipements, installation complète incluant les raccordements électriques et la plomberie.',
    prestations: [
      'Conception de cuisine sur mesure (plan 3D)',
      'Pose de meubles de cuisine (hauts et bas)',
      'Installation de plan de travail',
      'Raccordements électroménagers',
      'Raccordements plomberie (évier, lave-vaisselle)',
      'Pose de crédence et carrelage cuisine',
      'Éclairage sous-meubles et spots LED',
      'Rénovation de cuisine existante',
    ],
    areas: [
      'Argenteuil', 'Cergy', 'Saint-Gratien', 'Sartrouville',
      'Cormeilles-en-Parisis', 'Herblay', 'Ermont', 'Enghien-les-Bains',
      'Val-d\'Oise (95)', 'Île-de-France',
    ],
    faqs: [
      {
        question: 'Quel est le prix d\'une cuisine sur mesure à Argenteuil ?',
        answer:
          'Le coût d\'une cuisine sur mesure à Argenteuil varie entre 3 000 € et 15 000 € selon la surface, les matériaux et les équipements. La pose seule (sans fourniture) est entre 800 € et 2 500 €. Nous établissons un devis gratuit après visite et prise de mesures.',
      },
      {
        question: 'Posez-vous des cuisines de toutes marques ?',
        answer:
          'Oui, nous posons des cuisines de toutes marques (Ikea, Leroy Merlin, But, Schmidt, etc.) ainsi que des cuisines sur mesure fabriquées par nos partenaires artisans ébénistes. Nous gérons la pose complète clé en main.',
      },
      {
        question: 'Combien de temps prend l\'installation d\'une cuisine ?',
        answer:
          'L\'installation d\'une cuisine standard prend 2 à 4 jours selon sa complexité et le nombre de meubles. Si des travaux préparatoires sont nécessaires (électricité, plomberie, carrelage), comptez 5 à 8 jours au total.',
      },
      {
        question: 'Gérez-vous aussi la plomberie et l\'électricité de la cuisine ?',
        answer:
          'Oui, c\'est l\'un de nos avantages : nous gérons tous les corps de métier en interne (menuiserie, plomberie, électricité, carrelage). Vous n\'avez qu\'un seul interlocuteur pour l\'ensemble de votre projet de cuisine.',
      },
    ],
    relatedBlogSlugs: [
      'renovation-cuisine-argenteuil-prix',
      'cuisine-sur-mesure-vs-meublee-prix',
    ],
    imageAlt: 'Cuisiniste Argenteuil — pose cuisine sur mesure',
  },
  {
    id: 7,
    seoSlug: 'verriere-interieure-argenteuil',
    title: 'Verrière Intérieure',
    metaTitle: 'Verrière Intérieure Argenteuil — Pose Cloison Vitrée',
    metaDescription:
      'Pose de verrière intérieure à Argenteuil et Île-de-France. Verrière atelier, cloison vitrée, séparation style industriel. Sur mesure. Devis gratuit — Horizon Habitat Projet.',
    h1: 'Verrière Intérieure à Argenteuil — Pose de Cloison Vitrée sur Mesure',
    description:
      'Artisan spécialisé dans la pose de verrières intérieures à Argenteuil et en Île-de-France. Verrière style atelier, cloison vitrée, séparation cuisine-salon, porte vitrée sur mesure. Installation soignée avec finitions métal et verre pour un résultat haut de gamme.',
    prestations: [
      'Verrière atelier style industriel',
      'Cloison vitrée cuisine-salon',
      'Séparation bureau-pièce à vivre',
      'Porte vitrée et châssis fixe',
      'Verrière sur mesure (métal noir, acier, aluminium)',
      'Verre feuilleté, dépoli ou clair',
      'Installation et finitions complètes',
    ],
    areas: [
      'Argenteuil', 'Cergy', 'Saint-Gratien', 'Sartrouville',
      'Cormeilles-en-Parisis', 'Herblay', 'Ermont', 'Enghien-les-Bains',
      'Paris', 'Île-de-France',
    ],
    faqs: [
      {
        question: 'Quel est le prix d\'une verrière intérieure à Argenteuil ?',
        answer:
          'Le prix d\'une verrière intérieure à Argenteuil est généralement compris entre 1 200 € et 4 000 € selon les dimensions, le type de verre et le profil (métal noir, acier, aluminium). Nous réalisons chaque verrière sur mesure et fournissons un devis gratuit après visite.',
      },
      {
        question: 'Quelle est la différence entre une verrière et une cloison vitrée ?',
        answer:
          'Une verrière intérieure est une structure fixe en métal et verre, généralement ancrée du sol au plafond ou intégrée dans une cloison. Une cloison vitrée peut inclure des parties fixes et des parties ouvrantes (portes). Nous réalisons les deux types selon vos besoins.',
      },
      {
        question: 'Faut-il un permis pour poser une verrière intérieure ?',
        answer:
          'Non, la pose d\'une verrière intérieure ne nécessite pas de permis de construire ni de déclaration préalable, sauf en cas de modification de la structure porteuse du bâtiment. Nous vérifions toujours la faisabilité technique avant l\'installation.',
      },
      {
        question: 'Combien de temps dure la pose d\'une verrière intérieure ?',
        answer:
          'La pose d\'une verrière intérieure standard prend généralement 1 à 2 jours. Pour les grandes surfaces ou les installations complexes avec porte coulissante intégrée, comptez 2 à 3 jours. Les délais de fabrication sur mesure sont de 2 à 3 semaines.',
      },
      {
        question: 'Peut-on installer une verrière dans un appartement en location ?',
        answer:
          'Dans un appartement en location, vous devez obtenir l\'accord préalable de votre propriétaire pour toute modification structurelle. Dans les cas où la verrière est posée sans percement de mur porteur, certains propriétaires acceptent ce type d\'aménagement.',
      },
    ],
    relatedBlogSlugs: ['amenagement-studio-25m2-argenteuil', 'budget-renovation-appartement-idf-2025'],
    imageAlt: 'Verrière intérieure Argenteuil — cloison vitrée style atelier',
  },
]
