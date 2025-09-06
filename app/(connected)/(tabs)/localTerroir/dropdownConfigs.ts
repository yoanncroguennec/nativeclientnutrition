// Exemple de fichier dropdownConfigs.ts (à adapter selon ta structure)

const dropdownConfigs = [
  {
    key: 'filterType',
    label: 'Filtrer par type',
    state: undefined, // Remplacé au runtime
    setState: undefined, // Remplacé au runtime
    options: [
      { label: 'Tous', value: 'all' },
      { label: 'Légumes', value: 'vegetable' },
      { label: 'Fruits', value: 'fruit' },
    ],
  },
  {
    key: 'periodFilter',
    label: 'Période',
    state: undefined,
    setState: undefined,
    options: [
      { label: 'Tous', value: 'all' },
      { label: 'Semis', value: 'sowing' },
      { label: 'Récolte', value: 'harvest' },
    ],
  },
  {
    key: 'monthFilter',
    label: 'Mois',
    state: undefined,
    setState: undefined,
    options: [
      { label: 'Tous', value: 'all' },
      { label: 'Janvier', value: 1 },
      { label: 'Février', value: 2 },
      { label: 'Mars', value: 3 },
      { label: 'Avril', value: 4 },
      { label: 'Mai', value: 5 },
      { label: 'Juin', value: 6 },
      { label: 'Juillet', value: 7 },
      { label: 'Août', value: 8 },
      { label: 'Septembre', value: 9 },
      { label: 'Octobre', value: 10 },
      { label: 'Novembre', value: 11 },
      { label: 'Décembre', value: 12 },
    ],
  },
]

export default dropdownConfigs
