export const etapes = [
  {
    id: '01',
    titre: 'Audit de l’existant',
    description:
      'Analyse de la version Drupal, des modules, de la structure de la base de données, des contenus et des utilisateurs.',
  },
  {
    id: '02',
    titre: 'Choix de la plateforme',
    description:
      'Sélection d’un CMS récent et stable, avec une maintenance réduite et un cycle de mises à jour maîtrisé.',
  },
  {
    id: '03',
    titre: 'Migration des données',
    description:
      'Transfert sécurisé des pages, médias, comptes et données existantes avec scripts d’export et d’import.',
  },
  {
    id: '04',
    titre: 'Reprise fonctionnelle',
    description:
      'Recréation ou adaptation des fonctionnalités du site actuel sur la nouvelle plateforme.',
  },
  {
    id: '05',
    titre: 'Recette et mise en ligne',
    description:
      'Tests complets, redirections 301, conservation du référencement et bascule en production.',
  },
  {
    id: '06',
    titre: 'Devis et appel de fonds',
    description:
      'Chiffrage détaillé utilisable pour le budget participatif et le financement du projet.',
  },
];

export const avantages = [
  {
    titre: 'Maintenance allégée',
    texte: 'Plateforme LTS stable, peu de mises à jour critiques et coûts de possession réduits.',
  },
  {
    titre: 'Intégrité des données',
    texte: 'Traçabilité complète de chaque contenu migré, avec contrôles de cohérence automatisés.',
  },
  {
    titre: 'SEO préservé',
    texte: 'Cartographie des URL et redirections 301 pour conserver le référencement acquis.',
  },
  {
    titre: 'Sécurité renforcée',
    texte: 'HTTPS, sauvegardes automatisées, gestion fine des droits et hébergement compatible.',
  },
];

export const plateformes = [
  {
    nom: 'Drupal LTS',
    focus: 'Continuité éditoriale',
    points: ['Écosystème mature', 'Contrôle granulaire', 'Migration progressive'],
  },
  {
    nom: 'WordPress',
    focus: 'Simplicité éditoriale',
    points: ['Maintenance légère', 'Thèmes modernes', 'Édition intuitive'],
  },
  {
    nom: 'Framework PHP',
    focus: 'Sur-mesure maîtrisé',
    points: ['Architecture claire', 'Performance ciblée', 'Évolutivité fine'],
  },
];

export const chiffres = [
  { label: 'Contenus migrés', valeur: '100%' },
  { label: 'Redirections 301', valeur: 'SEO' },
  { label: 'Maintenance', valeur: '-70%' },
  { label: 'Disponibilité cible', valeur: '99,9%' },
];

export const flux = [
  'Analyse et cadrage',
  'Solution cible et devis',
  'Migration en environnement de test',
  'Recette et validation',
  'Mise en production',
  'Documentation et transfert',
];
