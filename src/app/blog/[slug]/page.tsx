import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blog-posts'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Article non trouvé',
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      locale: 'fr_FR',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

// Article content
const articleContent: Record<string, string> = {
  'renovation-cuisine-argenteuil-prix': `
    <h2>Introduction</h2>
    <p>La rénovation d'une cuisine est l'un des investissements les plus importants dans un logement. Que vous habitiez une petite cuisine parisienne ou un pavillon en Île-de-France, les tarifs varient considérablement selon le type de cuisine, les matériaux choisis, l'étendue des travaux et les finitions souhaitées.</p>

    <h2>Les différents budgets 2025</h2>

    <h3>Rénovation mineure : 3 000 € à 5 000 €</h3>
    <p>Pour cette gamme, on parle plutôt de rafraîchissement : peinture des murs, changement des poignées, remplacement des joints, nouvelle crédence adhésive. Idéal si votre cuisine est fonctionnelle mais datée.</p>

    <h3>Rénovation intermédiaire : 8 000 € à 15 000 €</h3>
    <p>C'est le budget "bon compromis" : remplacement des façades de meubles, nouveaux électroménagers, changement du plan de travail, petit aménagement. Vous gardez la structure existante mais modernisez l'espace.</p>

    <h3>Rénovation complète : 15 000 € à 30 000 €+</h3>
    <p>La grosse rénovation : dépose complète, nouvelle plomberie, électricité, cuisines sur mesure ou haut de gamme, carrelage à neuf. C'est l'option pour un changement radical.</p>

    <h2>Les postes budgétaires détaillés</h2>
    <ul>
      <li><strong>Meubles et rangements</strong> : 30-50% du budget total</li>
      <li><strong>Électroménagers</strong> : 15-25%</li>
      <li><strong>Plan de travail</strong> : 10-15%</li>
      <li><strong>Carrelage et sol</strong> : 10-20%</li>
      <li><strong>Peinture et crédence</strong> : 5-10%</li>
      <li><strong>Plomberie/électricité</strong> : 10-15% (si refonte)</li>
    </ul>

    <h2>Tendances cuisines 2025</h2>
    <p>Les cuisines minimalistes continuent de dominer, avec des finitions naturelles (bois clair, tons neutres). L'intégration d'îlots centraux est très demandée, même en petit espace. Les rangements intelligents et dissimulés sont essentiels. Les crédences carrelage traditionnel font leur grand retour.</p>

    <h2>Conseils pour optimiser votre budget</h2>
    <p>Définissez clairement vos priorités avant de commencer. Préférez-vous une belle cuisine avec moins d'électroménagers ou l'inverse ? Envisagez de garder les meubles et de changer façades + plan de travail. N'oubliez pas une marge de 10-15% pour les imprévus.</p>

    <h2>Conclusion</h2>
    <p>À Argenteuil et en Île-de-France, une rénovation cuisine bien planifiée est un excellent retour sur investissement. Nous vous recommandons de demander plusieurs devis gratuits pour comparer les propositions et trouver le meilleur rapport qualité-prix.</p>
  `,

  'salle-de-bain-appartement-haussmannien-idf': `
    <h2>Pourquoi les salle de bain haussmanniennes sont complexes</h2>
    <p>Les appartements haussmanniens (fin du XIXe siècle) présentent des contraintes spécifiques : hauteurs sous plafond généreuses mais épaisseurs de murs considérables, tuyauteries anciennes souvent obsolètes, et des règles strictes de copropriété. Rénover une salle de bain demande une approche respectueuse du patrimoine.</p>

    <h2>Conserver l'authenticité haussmannienne</h2>
    <p>Conservez les moulures au plafond si elles sont en bon état. Les carrelages d'époque (grands carreaux blancs, petits carreaux mosaïque) peuvent être restaurés ou inspirent le design actuel. Privilégiez les couleurs intemporelles : blanc, gris clair, beige.</p>

    <h2>Modernisation tout en respectant le style</h2>
    <p>Une douche à l'italienne en marbre blanc s'intègre parfaitement. Les appareils sanitaires chromés brillants rappellent l'époque. Les miroirs dorés ou en laiton complètent le design rétro-chic. Vous modernisez le confort (chauffage, ventilation) sans dénaturer le caractère.</p>

    <h2>Aménagement spatial optimal</h2>
    <p>Les salles de bain haussmanniennes sont rarement spacieuses. Solutions : meuble de salle de bain sur mesure, rangements muraux verticaux, baignoire compacte ou suppression au profit d'une douche généreuse, miroir surdimensionné pour agrandir visuellement l'espace.</p>

    <h2>Points techniques importants</h2>
    <ul>
      <li><strong>Ventilation</strong> : L'aération est critique. Installez une VMC performante.</li>
      <li><strong>Étanchéité</strong> : Imperméabilisez correctement avant carrelage pour éviter les dégâts.</li>
      <li><strong>Électricité</strong> : Mettez aux normes (prises, éclairage) pour la sécurité.</li>
      <li><strong>Tuyauteries</strong> : C'est l'occasion de remplacer les vieilles conduites (fonte, cuivre).</li>
    </ul>

    <h2>Budget rénovation salle de bain haussmannienne</h2>
    <p>Comptez entre 5 000 € et 15 000 € selon si vous conservez la baignoire ou l'enlevez, la qualité des finitions, et l'ampleur des travaux de plomberie. Les appartements parisiens nécessitent parfois des demandes auprès du syndic.</p>

    <h2>Conclusion</h2>
    <p>Rénover une salle de bain haussmannienne c'est trouver l'équilibre entre respect du patrimoine et confort moderne. Nous accompagnons les propriétaires dans ce projet complexe.</p>
  `,

  'peinture-agrandir-appartement-tendances-2025': `
    <h2>Les couleurs qui créent de l'espace</h2>
    <p>La couleur est un outil puissant pour modifier la perception d'une pièce. Les couleurs claires reflètent la lumière et agrandissent visuellement un espace, tandis que les couleurs sombres le rétrécissent. Pour un petit appartement, privilégiez les teintes pastel et lumineuses.</p>

    <h2>La stratégie du "mur d'accent"</h2>
    <p>Ne peignez pas toute votre pièce en couleur foncée. Peindre un seul mur (souvent le mur du fond) en teinte plus soutenue crée de la profondeur et du caractère. Les trois autres murs restent blancs ou dans une teinte très claire pour agrandir visuellement l'espace.</p>

    <h2>Les meilleures couleurs pour 2025</h2>
    <ul>
      <li><strong>Verts sauge, bleu-gris</strong> : Apaisants et élégants, avec une légère saturation</li>
      <li><strong>Terracotta et ochre</strong> : Chaleur sans surcharge visuelle</li>
      <li><strong>Beiges chauds</strong> : Intemporels et spacieux</li>
      <li><strong>Blanc cassé et crème</strong> : Maximum de lumière, très en vogue</li>
      <li><strong>Bleus ciel, bleus poudré</strong> : Apaisants et modernes</li>
    </ul>

    <h2>Les finitions qui font la différence</h2>
    <p><strong>Finition mate</strong> : Très élégante, masque les imperfections, absorbe la lumière. À utiliser sur murs entiers.</p>
    <p><strong>Finition satin/semi-brillante</strong> : Reflète légèrement la lumière, facile à nettoyer. Agrandit visuellement l'espace.</p>
    <p><strong>Finition brillante</strong> : Maximum de brillance, aspect très moderne. À réserver aux accents ou pièces grandes.</p>

    <h2>Astuces d'agrandissement supplémentaires</h2>
    <ul>
      <li>Peignez le plafond en blanc/très clair pour augmenter la hauteur perçue</li>
      <li>Utiliser du papier peint à motifs délicats (très tendance 2025) sur un seul mur</li>
      <li>Harmonisez la couleur des boiseries et portes avec les murs pour une continuité</li>
      <li>Augmentez l'éclairage (ampoules LED blanc chaud) pour dynamiser les teintes</li>
    </ul>

    <h2>Tendances 2025</h2>
    <p>Les couleurs dites "nature" dominent : teintes matte, palettes mono-chromatiques subtiles, absence de contraste agressif. L'époque des couleurs vives et contrastées est révolue. On cherche plutôt de l'harmonie et du bien-être visuel.</p>

    <h2>Conclusion</h2>
    <p>La couleur est l'élément le moins cher pour transformer un petit espace. Un bon choix de couleur et de finition peut véritablement changer la perception de votre appartement. N'hésitez pas à acheter des petits pots de peinture pour tester avant de vous engager.</p>
  `,

  'revetement-sol-parquet-carrelage-vinyle-idf': `
    <h2>Les trois incontournables de la rénovation</h2>
    <p>Parquet, carrelage, et vinyle sont les trois grands choix de revêtement de sol. Chacun a ses avantages et ses inconvénients. Bien les comprendre vous aidera à faire le bon choix pour votre rénovation en Île-de-France.</p>

    <h2>Le parquet : chaleur et authenticité</h2>
    <p><strong>Avantages :</strong> Très esthétique, chaleur naturelle, augmente la valeur du bien immobilier. Excellent pour les chambres et salons. Sensation agréable sous les pieds.</p>
    <p><strong>Inconvénients :</strong> Cher (800-2000€/m² posé). Demande de l'entretien régulier. Sensible à l'humidité (à proscrire dans salle de bain/cuisine). Peut se rayer facilement.</p>
    <p><strong>Entretien :</strong> Aspiration régulière, nettoyage humide avec produits spécifiques, cirage/vitrification tous les 3-5 ans.</p>
    <p><strong>Prix moyen Argenteuil :</strong> 1200-2500€ pour une cuisine de 15m²</p>

    <h2>Le carrelage : robustesse et entretien</h2>
    <p><strong>Avantages :</strong> Très résistant, facile à nettoyer, imperméable (parfait pour cuisine/salle de bain). Nombreux styles et couleurs. Durée de vie très longue.</p>
    <p><strong>Inconvénients :</strong> Peut être froid sous les pieds. Bruyant (les pas résonnent). Installation demande expertise. Joints à entretenir. Réparation complexe si casse.</p>
    <p><strong>Types courants :</strong> Grès cérame (très robuste), carrelage traditionnel, ciment (style industriel), pierre naturelle.</p>
    <p><strong>Prix moyen Île-de-France :</strong> 600-1500€ pour une cuisine de 15m² (fourniture + pose)</p>

    <h2>Le vinyle : la révolution moderne</h2>
    <p><strong>Avantages :</strong> Très abordable (300-800€/m²), imitation parquet/carrelage très réaliste, chaud sous les pieds, bon acoustique, facile à poser. Installation rapide = moins cher.</p>
    <p><strong>Inconvénients :</strong> Moins "premium" qu'un vrai parquet. Durée de vie inférieure (15-20 ans vs 30+ pour parquet/carrelage). Sensible aux objets lourds (marques).</p>
    <p><strong>Types modernes :</strong> Vinyle luxury (LVT - Luxury Vinyl Tile), vinyle cliquable, vinyle auto-adhésif.</p>
    <p><strong>Prix moyen Argenteuil :</strong> 400-900€ pour une cuisine de 15m²</p>

    <h2>Comparaison détaillée</h2>
    <table>
      <tr>
        <td><strong>Critère</strong></td>
        <td><strong>Parquet</strong></td>
        <td><strong>Carrelage</strong></td>
        <td><strong>Vinyle</strong></td>
      </tr>
      <tr>
        <td>Prix installation</td>
        <td>Très cher</td>
        <td>Moyen</td>
        <td>Pas cher</td>
      </tr>
      <tr>
        <td>Durée de vie</td>
        <td>30+ ans</td>
        <td>30+ ans</td>
        <td>15-20 ans</td>
      </tr>
      <tr>
        <td>Entretien</td>
        <td>Régulier</td>
        <td>Facile</td>
        <td>Facile</td>
      </tr>
      <tr>
        <td>Cuisine/Salle de bain</td>
        <td>Non</td>
        <td>Oui</td>
        <td>Oui</td>
      </tr>
      <tr>
        <td>Chaleur sous pieds</td>
        <td>Oui</td>
        <td>Non</td>
        <td>Oui</td>
      </tr>
      <tr>
        <td>Resale value</td>
        <td>+++ (très bon)</td>
        <td>++ (bon)</td>
        <td>+ (neutre)</td>
      </tr>
    </table>

    <h2>Conseil pour Argenteuil et IDF</h2>
    <p>Les maisons anciennes à Argenteuil bénéficient d'un parquet ancien (à rénover) ou d'un carrelage. Pour une rénovation budget, le vinyle LVT moderne est une excellente alternative : imitation très réaliste, installation rapide, prix abordable.</p>

    <h2>Tendance 2025</h2>
    <p>Retour aux grands carreaux carrelage (60x60cm), parquets larges (12-20cm), et vinyles imitation pierre naturelle. Les styles mélangés (parquet dans salon, carrelage en cuisine) gagnent du terrain.</p>

    <h2>Conclusion</h2>
    <p>Choisissez selon votre budget, vos priorités (esthétique vs praticité), et l'usage de la pièce. Un budget serré ? Vinyle. Un investissement long terme ? Parquet ou carrelage. Pour votre projet, n'hésitez pas à nous demander conseil.</p>
  `,

  'mise-aux-normes-electrique-argenteuil': `
    <h2>Pourquoi mettre aux normes son électricité ?</h2>
    <p>Les installations électriques anciennes (pré-2000) ne respectent plus les normes de sécurité actuelles. Les risques : électrocutions, incendies, surcharges. Mettre aux normes, c'est sécuriser votre logement et celui de votre famille.</p>

    <h2>La norme NF C 15-100</h2>
    <p>C'est la norme française actuelle pour les installations électriques résidentielles. Elle impose :</p>
    <ul>
      <li>Un disjoncteur général avec différentiel 30mA (protection contre électrocution)</li>
      <li>Circuit spécialisé pour la cuisine, salle de bain, chauffage</li>
      <li>Minimum 10 prises par pièce (10A minimum)</li>
      <li>Éclairage adéquat avec interrupteurs à la bonne hauteur</li>
      <li>Mise à terre complète de tous les éléments</li>
      <li>Protection des circuits par disjoncteurs adaptés</li>
    </ul>

    <h2>Signaux d'alerte : votre électricité n'est pas aux normes</h2>
    <ul>
      <li>Fusibles anciens (au lieu de disjoncteurs)</li>
      <li>Peu de prises (vous utilisez des multiprises partout)</li>
      <li>Disjoncteur qui saute souvent</li>
      <li>Fils apparents ou en mauvais état</li>
      <li>Pas de prise de terre (chauffage, réfrigérateur non protégés)</li>
      <li>Installation datant de plus de 15-20 ans</li>
    </ul>

    <h2>Coût de mise aux normes à Argenteuil</h2>
    <p><strong>Petit logement (50m², 1-2 pièces)</strong> : 2500-4000€</p>
    <p><strong>Logement intermédiaire (80m², 3 pièces)</strong> : 4000-6500€</p>
    <p><strong>Grand logement (100m², 4 pièces)</strong> : 6500-9000€</p>
    <p>Coût moyen : 50-70€/m² en Île-de-France</p>

    <h2>Les différents types de travaux</h2>
    <ul>
      <li><strong>Remise partielle aux normes</strong> : Changement tableau électrique + quelques circuits = 2000-3500€</li>
      <li><strong>Remise complète aux normes</strong> : Câblage neuf + tableau + prises + éclairage = 4000-9000€</li>
      <li><strong>Surélévation électrique</strong> : Augmenter la puissance souscrite (de 6kVA à 9kVA) = 500-1500€</li>
    </ul>

    <h2>Démarches administratives</h2>
    <p>Après travaux, un diagnostiqueur agréé valide la conformité. Vous recevez un certificat de conformité. C'est obligatoire en cas de vente ou transfert de propriété.</p>

    <h2>Aides et subventions possibles</h2>
    <p>MaPrimeRénov' peut couvrir partiellement une remise aux normes électrique si associée à travaux d'amélioration énergétique (isolation, chauffage). À vérifier auprès de votre mairie ou de l'ANAH.</p>

    <h2>Risques de ne pas mettre aux normes</h2>
    <ul>
      <li>Danger électrique pour habitants</li>
      <li>Risque d'incendie</li>
      <li>Problème de revente (diagnostic révèle non-conformité)</li>
      <li>Assurance habitation peut refuser couverture</li>
      <li>Impossibilité d'installer certains appareils modernes</li>
    </ul>

    <h2>Conclusion</h2>
    <p>La mise aux normes électrique est un investissement de sécurité. À Argenteuil, nous recommandons un diagnostic complet avant d'engager les travaux. Nous travaillons avec des électriciens certifiés et normes.</p>
  `,

  'amenagement-studio-25m2-argenteuil': `
    <h2>Les défis d'un petit studio</h2>
    <p>25m² c'est juste : il faut combiner salon, chambre, cuisine et salle de bain dans un espace très réduit. L'astuce : optimiser chaque m² avec du mobilier malin, des couleurs claires, et des aménagements sur mesure.</p>

    <h2>Circulation et zones définies</h2>
    <p>Dans un studio, il n'y a souvent qu'une grande pièce unique. Créez des zones distinctes (coin sleeping, coin office, coin kitchenette) avec :</p>
    <ul>
      <li>Demi-cloison légère ou rideau pour délimiter</li>
      <li>Tapis pour définir visuellement l'espace</li>
      <li>Variation de hauteur (différents mobiliers)</li>
      <li>Changement de couleur ou de carrelage</li>
    </ul>

    <h2>Les meubles essentiels</h2>
    <ul>
      <li><strong>Lit en mezzanine</strong> : Libère l'espace au sol. Idéal pour studio avec plafond haut.</li>
      <li><strong>Canapé-lit/futon</strong> : Pour salon + couchage. Modulable.</li>
      <li><strong>Table pliable/escamotable</strong> : Cuisine-salle à manger flexible</li>
      <li><strong>Rangements verticaux</strong> : Étagères murales plutôt que meubles épais</li>
      <li><strong>Cuisine ouverte sur mesure</strong> : Optimise chaque cm²</li>
    </ul>

    <h2>Optimiser la salle de bain</h2>
    <p>Souvent 3-4m² seulement. Solutions :</p>
    <ul>
      <li>Douche compacte (90x90) plutôt que baignoire</li>
      <li>Lave-mains très petit ou vasque intégrée</li>
      <li>Meuble suspendu pour gain de place</li>
      <li>Miroir surdimensionné pour agrandir visuellement</li>
      <li>Carrelage clair et brillant</li>
    </ul>

    <h2>La cuisine en 4-5m²</h2>
    <p>Kitchenette en L ou en ligne : réfrigérateur + plaque + évier + rangement en 1.5-2m linéaire. Points clés :</p>
    <ul>
      <li>Électroménagers compacts (réfrigérateur 50cm, plaque 2 feux)</li>
      <li>Rangement intégré sous plan de travail</li>
      <li>Couleur claire et brillante pour l'agrandir</li>
      <li>Ouverture sur salon (pas de porte) pour circulation</li>
    </ul>

    <h2>Les couleurs qui agrandissent</h2>
    <p>Studio = 100% blanc/gris clair/beige poudré. Pas de couleur foncée sauf mur accent très petit. La lumière est votre meilleure amie : miroirs, éclairage indirect, peinture brillante.</p>

    <h2>Rangements malins</h2>
    <ul>
      <li>Lit surélevé avec rangement sous structure</li>
      <li>Étagères au-dessus des murs</li>
      <li>Porte à rangements intégrés</li>
      <li>Meubles multifonction (canapé coffre, table rangement)</li>
      <li>Armoire encastrée si possible</li>
    </ul>

    <h2>Budget aménagement studio 25m² à Argenteuil</h2>
    <p><strong>Minimaliste</strong> : 4000-6000€ (peinture, meuble, basique)</p>
    <p><strong>Confortable</strong> : 8000-12000€ (cuisine ouverte, salle bain, mobilier qualité)</p>
    <p><strong>Haut de gamme</strong> : 15000€+ (sur mesure, design)</p>

    <h2>Avant/Après concret</h2>
    <p>Exemple d'un studio parisien : studio brut avec ancien carrelage déprimant, murs gris humide, éclairage faible. Après : murs blanc pur, cuisine ouverte sur mesure blanc/bois, carrelage clair, canapé-lit gris clair, mezzanine lit, miroirs, éclairage LED → un espace aéré et chaleureux pour 10 000€.</p>

    <h2>Conclusion</h2>
    <p>Aménager un petit studio c'est de la stratégie. Chaque choix de couleur, meuble, et rangement compte. Nous créons des espaces où la petite taille devient un atout (cosy, intime, facile à entretenir).</p>
  `,

  'budget-renovation-appartement-idf-2025': `
    <h2>Estimation pour un 3 pièces en Île-de-France</h2>
    <p>Vous avez un T3 (60-70m²) et vous voulez le rénover complètement ? Voici une estimation 2025 pour Argenteuil et l'Île-de-France.</p>

    <h2>Budget détaillé par poste</h2>

    <h3>Électricité (mise aux normes complète)</h3>
    <ul>
      <li>Tableau + disjoncteurs : 800€</li>
      <li>Câblage + prises + interrupteurs : 2000€</li>
      <li>Éclairage (lampes + spots LED) : 1200€</li>
      <li><strong>Total électricité : 4000€</strong></li>
    </ul>

    <h3>Plomberie</h3>
    <ul>
      <li>Tuyauteries eau chaude/froide : 1500€</li>
      <li>Évacuations et siphons : 800€</li>
      <li>Radiateurs chauffage (2-3 radiateurs) : 1500€</li>
      <li><strong>Total plomberie : 3800€</strong></li>
    </ul>

    <h3>Peinture et enduit</h3>
    <ul>
      <li>Préparation murs (ponçage, rebouchage) : 1000€</li>
      <li>Peinture murale (tous les murs) : 1500€</li>
      <li><strong>Total peinture : 2500€</strong></li>
    </ul>

    <h3>Carrelage et revêtement sol</h3>
    <ul>
      <li>Carrelage cuisine : 1200€</li>
      <li>Carrelage salle de bain : 1500€</li>
      <li>Parquet/vinyle salon + chambre : 1800€</li>
      <li><strong>Total revêtement : 4500€</strong></li>
    </ul>

    <h3>Cuisine rénovation</h3>
    <ul>
      <li>Meubles cuisine (sur mesure ou semi) : 3000€</li>
      <li>Plan de travail et crédence : 1200€</li>
      <li>Électroménagers (4 appareils) : 1500€</li>
      <li>Robinetterie et accessoires : 500€</li>
      <li><strong>Total cuisine : 6200€</strong></li>
    </ul>

    <h3>Salle de bain</h3>
    <ul>
      <li>Baignoire/douche : 1200€</li>
      <li>Meuble vasque : 800€</li>
      <li>Toilettes : 400€</li>
      <li>Chauffage salle bain (radiateur soufflant/sèche-serviettes) : 600€</li>
      <li>Carrelage et joint : 1500€</li>
      <li>Robinetterie : 400€</li>
      <li><strong>Total salle de bain : 4900€</strong></li>
    </ul>

    <h3>Divers et imprévus</h3>
    <ul>
      <li>Portes d'intérieur + serrures : 1200€</li>
      <li>Vitrage : 600€</li>
      <li>Murs (enlèvement ancien carrelage, décapage) : 1500€</li>
      <li>Imprévus et rattrapage (10-15%) : 2000€</li>
      <li><strong>Total divers : 5300€</strong></li>
    </ul>

    <h2>Budget total pour T3 complet</h2>
    <p><strong>Minimum 31 200€</strong> (sans grosse surprise)</p>
    <p><strong>Confortable : 35 000-40 000€</strong> (petites améliorations, qualité)</p>
    <p><strong>Premium : 45 000-55 000€+</strong> (matériaux haut de gamme, design)</p>

    <h2>Budget par m² en Île-de-France</h2>
    <p><strong>Rénovation standard</strong> : 450-550€/m² (T3 60m² = 27-33k€)</p>
    <p><strong>Rénovation qualité</strong> : 550-700€/m² (T3 60m² = 33-42k€)</p>
    <p><strong>Rénovation haut de gamme</strong> : 700€+/m² (T3 60m² = 42k€+)</p>

    <h2>Réduire le budget</h2>
    <ul>
      <li>Garder la baignoire plutôt que douche si existante</li>
      <li>Vinyle au lieu de parquet (économie 800-1500€)</li>
      <li>Cuisine partiellement rénovée (façades + plan de travail seulement) : économie 2000€</li>
      <li>Peinture simple plutôt que papier peint : économie 500€</li>
      <li>Électroménagers premier prix : économie 500€</li>
      <li>Faire une rénovation en étapes (cuisine année 1, salle bain année 2)</li>
    </ul>

    <h2>Augmenter le budget (si moyens financiers)</h2>
    <ul>
      <li>Climatisation réversible : 3000-5000€</li>
      <li>Domotique (éclairage intelligent, chauffage) : 2000€+</li>
      <li>Matériaux premium (marbre, bois massif, quincaillerie haut de gamme) : +20%</li>
      <li>Design intérieur professionnel : 1500-3000€</li>
    </ul>

    <h2>Points d'attention budget</h2>
    <ul>
      <li>15% imprévus obligatoires (vieux murs, plomberie cachée, électricité à refaire)</li>
      <li>Les travaux prennent plus de temps qu'estimé = déconvenue</li>
      <li>Matériaux peuvent augmenter (inflation, rupture stock)</li>
      <li>Main d'œuvre IDF est plus cher qu'en province</li>
    </ul>

    <h2>Financement</h2>
    <p>MaPrimeRénov', éco-PTZ, TVA réduite, crédit impôt sont envisageables selon travaux. À vérifier auprès des autorités.</p>

    <h2>Conclusion</h2>
    <p>Pour un T3 en Île-de-France : budget minimum 30-35k€, confortable 35-45k€. Toujours provisionner 15% pour imprévus.</p>
  `,

  'cuisine-sur-mesure-vs-meublee-prix': `
    <h2>La grande question : sur mesure ou meublée ?</h2>
    <p>Deux approches opposées : la cuisine sur mesure, créée pour votre espace exact, vs la cuisine meublée, faite en série. Quelle différence de prix, de qualité, et de satisfaction ?</p>

    <h2>Cuisine meublée (ou "modulaire")</h2>
    <p>Meubles fabriqués en série, vendu par IKEA, Lapeyre, Mobalpa, etc. Vous assemblez une configuration de meubles standards.</p>

    <h3>Avantages</h3>
    <ul>
      <li><strong>Prix très attractif</strong> : 3000-6000€ pour cuisine complète (fourniture seule)</li>
      <li>Livraison rapide (1-2 semaines)</li>
      <li>Éléments standard (robinets, poignées) faciles à remplacer</li>
      <li>Nombreux styles et coloris disponibles</li>
      <li>Installation DIY possible (épargne 500-1000€ main d'œuvre)</li>
    </ul>

    <h3>Inconvénients</h3>
    <ul>
      <li>Espace wasted (si cuisine non-standard, espaces morts)</li>
      <li>Moins robuste (panneaux particules vs bois massif)</li>
      <li>Durée de vie 10-15 ans vs 20+ pour sur mesure</li>
      <li>Toutes les cuisines se ressemblent</li>
      <li>Peu de personnalisation possible</li>
      <li>Plan de travail souvent médiocre</li>
    </ul>

    <h3>Prix moyen meublée Île-de-France</h3>
    <p><strong>Fourniture seule</strong> : 3500-6000€</p>
    <p><strong>Avec pose + électroménagers</strong> : 5500-9000€</p>

    <h2>Cuisine sur mesure</h2>
    <p>Conçue et fabriquée pour votre cuisine précise. Chaque meuble, chaque détail est adapté à votre espace.</p>

    <h3>Avantages</h3>
    <ul>
      <li><strong>Optimisation totale de l'espace</strong> : Zéro wasted, rangement partout</li>
      <li>Qualité supérieure : matériaux nobles, construction robuste</li>
      <li>Durée de vie 20-30 ans+</li>
      <li>Totalement personnalisable (couleurs, poignées, finitions)</li>
      <li>Ajout de détails (niches, étagères cachées, etc.)</li>
      <li>Expertise du cuisiniste : bons conseils</li>
    </ul>

    <h3>Inconvénients</h3>
    <ul>
      <li><strong>Budget significatif</strong> : 8000-18000€+</li>
      <li>Délai de fabrication 6-12 semaines</li>
      <li>Peu de flexibilité après commande</li>
      <li>Dépend de la compétence du cuisiniste</li>
      <li>Risque de dépassement budgétaire si mauvaise planification</li>
    </ul>

    <h3>Prix moyen sur mesure Île-de-France</h3>
    <p><strong>Fabrication seule</strong> : 6000-14000€</p>
    <p><strong>Avec pose + électroménagers</strong> : 10000-20000€+</p>

    <h2>Comparaison détaillée</h2>
    <table>
      <tr>
        <td><strong>Aspect</strong></td>
        <td><strong>Meublée</strong></td>
        <td><strong>Sur mesure</strong></td>
      </tr>
      <tr>
        <td>Budget initial</td>
        <td>3500-6000€</td>
        <td>6000-14000€</td>
      </tr>
      <tr>
        <td>+ pose + électro</td>
        <td>5500-9000€</td>
        <td>10000-20000€</td>
      </tr>
      <tr>
        <td>Durée de vie</td>
        <td>10-15 ans</td>
        <td>20-30 ans</td>
      </tr>
      <tr>
        <td>Optimisation espace</td>
        <td>Moyenne</td>
        <td>Maximale</td>
      </tr>
      <tr>
        <td>Qualité finitions</td>
        <td>Standard</td>
        <td>Premium</td>
      </tr>
      <tr>
        <td>Personnalisation</td>
        <td>Limitée</td>
        <td>Complète</td>
      </tr>
      <tr>
        <td>Délai livraison</td>
        <td>1-2 semaines</td>
        <td>6-12 semaines</td>
      </tr>
      <tr>
        <td>Sav et pièces</td>
        <td>Facile/standard</td>
        <td>Dépend cuisiniste</td>
      </tr>
    </table>

    <h2>Calcul du coût réel au fil du temps</h2>
    <p><strong>Meublée</strong> : 7000€ / 10 ans = 700€/an. Puis à remplacer = 7000€ x 2 = 14000€ pour 20 ans</p>
    <p><strong>Sur mesure</strong> : 15000€ / 25 ans = 600€/an. Plus robuste = moins de maintenance</p>
    <p><strong>Conclusion</strong> : Sur 20-25 ans, les deux se valent environ, MAIS la sur mesure offre bien plus de confort et de qualité.</p>

    <h2>Quand choisir meublée ?</h2>
    <ul>
      <li>Budget très serré (< 8000€ total)</li>
      <li>Cuisine simple et standard (pas d'angles bizarres)</li>
      <li>Avant de revendre à court terme</li>
      <li>Vous aimez pouvoir changer facilement</li>
    </ul>

    <h2>Quand choisir sur mesure ?</h2>
    <ul>
      <li>Cuisine complexe (angles, petite/grande, combles)</li>
      <li>Vous restez longtemps dans le logement</li>
      <li>Vous valorisez la qualité et la durabilité</li>
      <li>Vous voulez une cuisine vraiment unique</li>
      <li>Budget disponible (10-20k€+)</li>
    </ul>

    <h2>Cuisiniste vs Menuisier vs Grande surface</h2>
    <ul>
      <li><strong>Grande surface (IKEA, Lapeyre)</strong> : Meublée, bon marché, service minimal</li>
      <li><strong>Cuisiniste spécialisé</strong> : Sur mesure ou semi, expert en cuisine, prix moyen</li>
      <li><strong>Menuisier artisan</strong> : Tout sur mesure, haute qualité, prix élevé, délai long</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Meublée = rapport qualité-prix bon pour petit budget. Sur mesure = investissement à long terme. Choisissez selon votre situation et vos priorités.</p>
  `,

  'aides-renovation-val-d-oise-95': `
    <h2>Les aides principales en 2025</h2>
    <p>Vous êtes propriétaire en Val-d'Oise (95) et vous envisagez une rénovation ? Bonne nouvelle : plusieurs aides gouvernementales existent pour vous aider à financer vos travaux.</p>

    <h2>MaPrimeRénov' (gouvernement)</h2>
    <p><strong>Pour qui ?</strong> Propriétaires occupants ou bailleurs (tous revenus, mais montants progressifs)</p>
    <p><strong>Pour quoi ?</strong> Travaux de rénovation énergétique : isolation, chauffage, eau chaude sanitaire, ventilation, thermique</p>

    <h3>Montants 2025</h3>
    <ul>
      <li>Revenus très modestes : jusqu'à 100% du devis</li>
      <li>Revenus modestes : jusqu'à 70% du devis</li>
      <li>Revenus intermédiaires : jusqu'à 45% du devis</li>
      <li>Revenus supérieurs : jusqu'à 30% du devis</li>
    </ul>

    <p><strong>Exemple</strong> : Rénovation électricité + isolation = 20000€. Revenu modeste = jusqu'à 14000€ d'aide</p>
    <p><strong>Comment ?</strong> Démarche sur monprojetrenov.gouv.fr</p>

    <h2>Éco-PTZ (Éco-Prêt à Taux Zéro)</h2>
    <p><strong>Pour qui ?</strong> Propriétaires occupants (tous revenus) depuis plus de 2 ans</p>
    <p><strong>Pour quoi ?</strong> Travaux de rénovation énergétique</p>
    <p><strong>Montant</strong> : Jusqu'à 50 000€ gratuit (taux 0% + remboursement jusqu'à 20 ans)</p>
    <p><strong>Avantage</strong> : Pas d'intérêt + pas de frais de dossier</p>
    <p><strong>Comment ?</strong> Via banque (Crédit Agricole, Caisse d'Épargne, etc.)</p>

    <h2>MaPrimeAdapt' (nouveau 2024-2025)</h2>
    <p><strong>Pour qui ?</strong> Propriétaires 65+ ou handicapés (tous revenus)</p>
    <p><strong>Pour quoi ?</strong> Adaptations salle de bain, chambres (accessibilité)</p>
    <p><strong>Montant</strong> : Jusqu'à 22000€ aide + 30000€ crédit à 0%</p>
    <p><strong>Comment ?</strong> monprojetrenov.gouv.fr</p>

    <h2>TVA réduite 5.5%</h2>
    <p><strong>Pour qui ?</strong> Propriétaires occupants ou bailleurs, tous revenus</p>
    <p><strong>Pour quoi ?</strong> Travaux rénovation (électricité, peinture, carrelage, fenêtres, plomberie)</p>
    <p><strong>Avantage</strong> : Au lieu de 20% TVA normale, vous payez 5.5%</p>
    <p><strong>Économie</strong> : Sur 30000€ de travaux = 4350€ d'économie</p>
    <p><strong>Condition</strong> : L'artisan doit être qualifié RGE (pour certains travaux)</p>

    <h2>Crédit impôt transition énergétique (CITE)</h2>
    <p><strong>Attention</strong> : Largement remplacé par MaPrimeRénov', mais subsiste partiellement</p>
    <p><strong>Pour qui ?</strong> Propriétaires occupants, tous revenus</p>
    <p><strong>Montant</strong> : 15-30% du devis selon type travaux</p>
    <p><strong>Exemple</strong> : Pompe à chaleur 8000€ → crédit impôt 2400€ (30%)</p>

    <h2>Aides locales Val-d'Oise (95)</h2>
    <ul>
      <li><strong>Conseil Départemental 95</strong> : Aides complémentaires pour travaux énergie/isolation</li>
      <li><strong>Communautés de communes</strong> : Certaines offrent aides locales (Cergy-Pontoise, Plaine de France)</li>
      <li><strong>Mairie locale</strong> : À vérifier auprès de votre mairie</li>
    </ul>
    <p><strong>Contact</strong> : Agence locale de l'énergie 95 (ALEC 95)</p>

    <h2>Cumul d'aides possible ?</h2>
    <p><strong>Oui, mais avec limitations</strong> :</p>
    <ul>
      <li>MaPrimeRénov' + Éco-PTZ : ✅ Cumulable</li>
      <li>MaPrimeRénov' + TVA 5.5% : ✅ Cumulable</li>
      <li>MaPrimeRénov' + Crédit impôt : ⚠️ Partiellement (attention au montant max)</li>
      <li>MaPrimeAdapt' + MaPrimeRénov' : ❌ Non cumulable sur mêmes travaux</li>
    </ul>

    <h2>Exemple concret</h2>
    <p><strong>Situation</strong> : Couple 95-98€ en Val-d'Oise, revenus modestes, rénovation électricité + isolation = 25000€</p>

    <p><strong>Aides possibles</strong> :</p>
    <ul>
      <li>MaPrimeRénov' (revenus modestes) : 70% = 17500€</li>
      <li>Éco-PTZ (crédit 0%) : jusqu'à 25000€ à rembourser gratuitement</li>
      <li>TVA 5.5% au lieu de 20% : économie 3625€</li>
      <li><strong>Total aide effective : ~24000€ (TVA + Prime)</strong></li>
      <li><strong>Coût réel pour vous : 1000€ seulement !</strong></li>
    </ul>

    <h2>Points importants</h2>
    <ul>
      <li>Les aides demandent des artisans RGE (reconnus garant environnement)</li>
      <li>Dossier à constituer avant travaux (pas après)</li>
      <li>Délai d'instruction 2-6 semaines</li>
      <li>Aides versées après réception des factures et travaux finis</li>
      <li>Certains travaux exclus (tous types) - bien vérifier avant</li>
    </ul>

    <h2>Démarche en 3 étapes</h2>
    <ol>
      <li>Faire des devis artisans RGE</li>
      <li>Constituer dossier sur monprojetrenov.gouv.fr</li>
      <li>Acceptation → travaux → factures → versement aide</li>
    </ol>

    <h2>Ressources utiles</h2>
    <ul>
      <li><strong>monprojetrenov.gouv.fr</strong> : Simulateur d'aides personnalisées</li>
      <li><strong>ALEC 95</strong> : Conseil local en énergie</li>
      <li><strong>Mairie/CCAS</strong> : Informations aides locales</li>
      <li><strong>Artisans RGE</strong> : Trouvez les vôtres sur www.qualibat.com</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Ne pas profiter des aides = perdre des milliers d'euros ! En Val-d'Oise, les aides peuvent couvrir 50-80% de vos travaux rénovation. Simulez vos aides dès aujourd'hui sur le site gouvernemental.</p>
  `,

  'artisan-confiance-renovation-argenteuil': `
    <h2>Pourquoi bien choisir son artisan est crucial</h2>
    <p>Un mauvais choix d'artisan peut coûter cher (10-20% de surcoût) et créer des problèmes durables. Bien choisir = tranquillité d'esprit et qualité garantie.</p>

    <h2>Les 5 critères essentiels</h2>

    <h3>1. Qualifications et certifications</h3>
    <p><strong>À vérifier absolument</strong> :</p>
    <ul>
      <li>✅ GAEC (Garantie d'Assurance Construction) ou assurance responsabilité civile</li>
      <li>✅ Qualibat ou equivalent pour artisans</li>
      <li>✅ RGE (Reconnu Garant Environnement) si travaux énergie</li>
      <li>✅ Cotisation RSA (artisan enregistré)</li>
      <li>✅ Numéro SIRET vérifiable</li>
    </ul>
    <p><strong>Comment vérifier ?</strong> Demandez documents + vérifiez SIRET sur entreprises.gouv.fr</p>

    <h3>2. Références et avis clients</h3>
    <p><strong>Demandez</strong> :</p>
    <ul>
      <li>Au minimum 3 références de clients satisfaits (avec coordonnées si possible)</li>
      <li>Avis Google, Facebook, Pages Jaunes</li>
      <li>Cas similaires au vôtre (ce qu'il a déjà rénové)</li>
      <li>Galerie photos avant/après</li>
    </ul>
    <p><strong>Red flags</strong> : Pas de références, mauvais avis répétés, photos floues</p>

    <h3>3. Transparence du devis</h3>
    <p><strong>Un bon devis doit contenir</strong> :</p>
    <ul>
      <li>Détail ligne par ligne (pas "rénovation salle de bain 5000€" vague)</li>
      <li>Marques et quantités des matériaux</li>
      <li>Durée estimée des travaux</li>
      <li>Conditions de paiement claires (pas 100% d'avance)</li>
      <li>Garantie explicite (décennale, 2 ans, etc.)</li>
      <li>Mentions légales (RGE, assurance, SIRET)</li>
    </ul>
    <p><strong>Prix anormalement bas</strong> ? Méfiance ! Peut signifier matériaux médiocres ou techniques bâclées.</p>

    <h3>4. Disponibilité et communication</h3>
    <p><strong>Pendant devis</strong> :</p>
    <ul>
      <li>Répond rapidement aux appels/SMS</li>
      <li>Prend le temps d'écouter et comprendre vos besoins</li>
      <li>Explique clairement son approche (pas du charabia technique)</li>
      <li>Donne estimation de délai réaliste</li>
    </ul>
    <p><strong>Red flags</strong> : Pas joignable, reçoit chez lui sans permanence, devis sur coin de table</p>

    <h3>5. Processus et conditions claires</h3>
    <p><strong>À clarifier avant de signer</strong> :</p>
    <ul>
      <li>Dates de début et fin précises</li>
      <li>Horaires de travail (généralement 8h-17h)</li>
      <li>Gestion des déchets (enlèvement inclus ?)</li>
      <li>Nuisances (bruit, poussière, parking)</li>
      <li>Responsabilité en cas de dégât (couverture assurance)</li>
      <li>Délai de rétraction (légalement 14 jours)</li>
      <li>Mode paiement (pas tout d'avance !)</li>
    </ul>

    <h2>Les types d'artisans</h2>

    <h3>Artisan solo (petit chantier)</h3>
    <p><strong>Avantages</strong> : Flexibilité, prix souvent plus bas, client privilégié</p>
    <p><strong>Inconvénients</strong> : Moins de stabilité, moins de recours si problème</p>
    <p><strong>À vérifier</strong> : GAEC + assurance décennale</p>

    <h3>PME (5-20 salariés)</h3>
    <p><strong>Avantages</strong> : Stabilité, équipe, responsabilité, délais respectés</p>
    <p><strong>Inconvénients</strong> : Prix généralement plus élevé</p>
    <p><strong>À vérifier</strong> : Avis sur pérennité entreprise</p>

    <h3>Franchise ou enseigne</h3>
    <p><strong>Avantages</strong> : Notoriété, garantie groupe</p>
    <p><strong>Inconvénients</strong> : Moins personnel, plus cher</p>

    <h2>Les questions clés à poser</h2>
    <ol>
      <li>"Avez-vous une GAEC et assurance responsabilité ?"</li>
      <li>"Vous êtes enregistré au Registre du Commerce (SIRET) ?"</li>
      <li>"Quelle est votre expérience sur ce type de chantier ?"</li>
      <li>"Pouvez-vous me donner 3 références de clients ?"</li>
      <li>"Quel est votre processus en cas de problème pendant les travaux ?"</li>
      <li>"Êtes-vous disponible pour une visite de chantier à fin des travaux ?"</li>
      <li>"Proposez-vous une garantie après finition, sur combien de temps ?"</li>
      <li>"Avez-vous des cas avant/après similaires à montrer ?"</li>
    </ol>

    <h2>Les erreurs à éviter</h2>
    <ul>
      <li>❌ Choisir sur prix seul ("le moins cher")</li>
      <li>❌ Signer devis sans vraiment le lire</li>
      <li>❌ Payer 100% d'avance (maximum 30%)</li>
      <li>❌ Pas d'écrit : seulement accord verbal</li>
      <li>❌ Oublier vérification GAEC/assurance</li>
      <li>❌ Ignorer les mauvais avis Google</li>
      <li>❌ Accepter délai irréaliste ("3 jours pour refaire cuisine")</li>
    </ul>

    <h2>La garantie décennale</h2>
    <p><strong>Obligatoire pour travaux</strong> : Couvre défauts de construction 10 ans après fin.</p>
    <p><strong>À demander</strong> : Certificat d'assurance décennale</p>
    <p><strong>Couvre</strong> : Problèmes structurels, infiltrations, dégâts</p>
    <p><strong>Ne couvre pas</strong> : Usure normale, mauvais entretien</p>

    <h2>À Argenteuil, comment trouver ?</h2>
    <ul>
      <li>Demandes auprès amis/collègues/voisins (le mieux !)</li>
      <li>PagesJaunes.fr ou Google Maps (vérifier avis)</li>
      <li>Qualibat.com (annuaire artisans qualifiés)</li>
      <li>Syndicat artisans local Val-d'Oise</li>
      <li>Mairie Argenteuil (souvent listes recommandées)</li>
    </ul>

    <h2>Processus de sélection optimal</h2>
    <ol>
      <li><strong>Phase 1</strong> : Identifiez 3-5 candidats</li>
      <li><strong>Phase 2</strong> : Demandez devis (gratuit)</li>
      <li><strong>Phase 3</strong> : Vérifiez SIRET + références</li>
      <li><strong>Phase 4</strong> : Appelez les références (confiance accrue)</li>
      <li><strong>Phase 5</strong> : Comparez devis (pas prix seul !)</li>
      <li><strong>Phase 6</strong> : Choisissez le meilleur rapport confiance/prix</li>
      <li><strong>Phase 7</strong> : Signez contrat clair</li>
    </ol>

    <h2>Conclusion</h2>
    <p>Bien choisir son artisan c'est éviter 80% des problèmes. Prenez le temps, demandez références, vérifiez certifications. Un bon artisan vaut son prix et vous économisera stress et argent à long terme. À Argenteuil, nous accompagnons les propriétaires dans ce choix crucial.</p>
  `,
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)

  const content = articleContent[post.slug] || '<p>Contenu de l\'article à venir...</p>'

  return (
    <div className="flex flex-col min-h-screen bg-canvas">
      <Header />
      <main className="flex-1 pt-20">

        {/* Hero */}
        <section className="bg-bark py-16 lg:py-24 px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.15em] text-canvas/50 hover:text-canvas transition-colors mb-10"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour aux articles
            </Link>
            <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-terra mb-6">
              Article
            </p>
            <h1 className="font-display text-3xl md:text-5xl text-canvas font-bold leading-tight mb-8">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-canvas/40 font-sans text-xs uppercase tracking-[0.1em]">
              <time>
                {new Date(post.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {post.author && <span>{post.author}</span>}
              {post.readingTime && <span>{post.readingTime} min de lecture</span>}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 lg:py-24 px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <article className="article-prose">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>

            {/* CTA */}
            <div className="mt-20 pt-10 border-t border-veil flex flex-col sm:flex-row sm:items-center gap-6">
              <p className="font-sans text-sm text-clay">
                Cet article vous a intéressé ?
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-bark text-canvas px-7 py-3.5 text-xs font-sans font-medium uppercase tracking-[0.12em] hover:bg-bark/80 transition-colors"
              >
                Discuter de votre projet
              </Link>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-veil py-16 lg:py-24 px-6 lg:px-10">
            <div className="max-w-6xl mx-auto">
              <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-clay mb-10">
                Articles connexes
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group border-t border-veil pt-8"
                  >
                    <div className="flex items-center gap-4 mb-4 text-[10px] font-sans uppercase tracking-[0.1em] text-clay">
                      {relatedPost.readingTime && <span>{relatedPost.readingTime} min</span>}
                      <time>
                        {new Date(relatedPost.date).toLocaleDateString('fr-FR', {
                          month: 'short',
                          year: 'numeric',
                        })}
                      </time>
                    </div>
                    <h3 className="font-display text-lg text-bark font-bold mb-3 group-hover:text-terra transition-colors leading-tight">
                      {relatedPost.title}
                    </h3>
                    <p className="font-sans text-clay text-sm leading-relaxed">
                      {relatedPost.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
