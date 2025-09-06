// sowing => semis
// harvest => récolte

const dataCrops = [
  ///// VEGETABLES /////
  {
    name: 'Ail',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: 'Artichauts',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: 'Asperges',
    varieties: [''],
    sowing: [],
    harvest: [5, 6], // récolte
    type: 'vegetable',
  },
  {
    name: 'Aubergines',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: 'Betteraves rouges',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: 'Bettes',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: 'Carottes',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: 'Choux',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: 'Concombres',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: 'Cornichons',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: 'Courges',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: 'Courgettes',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: 'Céleries',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: 'Échalotes',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: 'Épinard',
    varieties: ['Géant d’hiver', 'Columbia F1'],
    sowing: [1, 2, 3, 9, 10, 11],
    harvest: [4, 5, 6], // récolte
    type: 'vegetable',
  },
  {
    name: 'Fèves',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: 'Haricots blancs',
    varieties: [''],
    sowing: [],
    harvest: [],
    type: 'vegetable',
  },
  {
    name: 'Haricots verts',
    varieties: [''],
    sowing: [],
    harvest: [],
    type: 'vegetable',
  },
  {
    name: 'Maïs doux',
    varieties: [''],
    sowing: [],
    harvest: [],
    type: 'vegetable',
  },
  {
    name: 'Navets',
    varieties: [''],
    sowing: [],
    harvest: [],
    type: 'vegetable',
  },
  {
    name: 'Oignons',
    varieties: [''],
    sowing: [],
    harvest: [],
    type: 'vegetable',
  },
  {
    name: 'Petits poids',
    varieties: [''],
    sowing: [],
    harvest: [],
    type: 'vegetable',
  },
  {
    name: 'Poireaux',
    varieties: [''],
    sowing: [],
    harvest: [],
    type: 'vegetable',
  },
  {
    name: 'Poivrons',
    varieties: [''],
    sowing: [],
    harvest: [],
    type: 'vegetable',
  },
  {
    name: 'Pommes de terre',
    varieties: [''],
    sowing: [],
    harvest: [],
    type: 'vegetable',
  },
  {
    name: 'Radis',
    varieties: ['18 jours', 'Flambo', 'Red Meat'],
    sowing: [2, 3, 4, 8, 9],
    harvest: [3, 4, 5, 9, 10],
    type: 'vegetable',
  },
  {
    name: 'Salades',
    varieties: [''],
    sowing: [],
    harvest: [],
    type: 'vegetable',
  },
  {
    name: 'Tomates',
    varieties: [''],
    sowing: [],
    harvest: [],
    type: 'vegetable',
  },
  {
    name: 'Tomates cerises',
    varieties: [''],
    sowing: [],
    harvest: [],
    type: 'vegetable',
  },
  {
    name: '',
    varieties: [''],
    sowing: [],
    harvest: [],
    type: 'vegetable',
  },
  {
    name: '',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: '',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: '',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: '',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: '',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: '',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: '',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: '',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: '',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: '',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: '',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: '',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: '',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  {
    name: '',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'vegetable',
  },
  ///// FRUITS /////
  {
    name: 'Abricots',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'fruit',
  },
  {
    name: 'Cassis',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'fruit',
  },
  {
    name: 'Cerises',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'fruit',
  },
  {
    name: 'Fraise',
    varieties: ['Gariguette', 'Mara des bois'],
    sowing: [3, 4],
    harvest: [5, 6, 7], // récolte
    type: 'fruit',
  },
  {
    name: 'Framboises',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'fruit',
  },
  {
    name: 'Groseillles',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'fruit',
  },
  {
    name: 'Myrtilles',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'fruit',
  },
  {
    name: 'Mûres',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'fruit',
  },
  {
    name: 'Pastèques',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'fruit',
  },
  {
    name: 'Poires',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'fruit',
  },
  {
    name: 'Pommmes',
    varieties: ['Golden', 'Granny Smith'],
    sowing: [2],
    harvest: [9, 10], // récolte
    type: 'fruit',
  },
  {
    name: 'Prunes',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'fruit',
  },
  {
    name: 'Rhubarbe',
    varieties: [''],
    sowing: [],
    harvest: [], // récolte
    type: 'fruit',
  },
]

export default dataCrops
