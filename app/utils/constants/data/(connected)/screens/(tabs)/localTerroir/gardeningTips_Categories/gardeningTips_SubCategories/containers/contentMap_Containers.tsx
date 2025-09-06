import React from 'react'
import {
  /////////////////////
  ///// GARDENING /////
  /////////////////////
  ChoosingAndUsingWaterReservoirPot_Component,
  ChoosingFiveVegetablesForYourVegetableGarden_Component,
  MaintainingPotsAndPlanters_Component,
  PotsAndPlanters_whichMaterialToChoose_Component,
  ChoosingGardeningOutfit_Component,
  ChoosingSecateurs_Component,
  ChoosingGardenTarpaulin_Component,
  UnderstandingWinterFleece_Component,
  MulchingRoses_Component,
  FeedTheSoil_waterLess_Component,
  Mulching_cool_ProtectedSoil_Component,
  AmendmentGarden_Component,
  Outdoor_PottingSoil_Component,
  Indoor_PottingSoil_Component,
  // eco_FriendlyGardening // GARDENING
  BenefitsOfWaterCollector_Component,
  OrganicWeeding_Component,
  OrganicSlugControl_Component,
  TipsForControllingAphids_Component,
  EightWaysToReduceWaste_Component,
  // PermaculturelasagneGardening_Component,
  SuccessfulComposting_Component,
  UsingWormComposter_Component,
  GettingRidOdWeeds_Component,
  KnowYourSoil_Component,
  AdaptingYourGardenToClimateChange_Component,
  FlatCultivationInPermaculture_Component,
  SevenTipsForEcoFriendlyGardening_Component,
  PlantCompanionshipInPermaculture_Component,
  ImprovingSoilInPermaculture_Component,
  GrowingVegetableGardenInPermaculture_Component,
  BiocontrolNaturalProtection_Component,
  // poweredEquipment (Matériel motorisé) // GARDENING
  ChoosingScarifier_Component,
  ChoosingRotaryTillerAndMotorisedCultivator_Component,
  MaintainingYourLawnMower_Component,
  UsingAndMaintainingHedgeTrimmer_Componeny,
  ChoosingHedgeTrimmer_Component,
  ChoosingLeafBlower_Component,
  ChoosingPressureWasherAndForWhatUse_Component,
  ChoosingGardenShredder_Component,
  ChoosingPetrolLawnMower_Component,
  ChoosingLawnTractor_Component,
  ////////////////
  ///// PETS /////
  ////////////////
  DogSport_Component,
  WelcomingKitten_Component,
  FeedYourDog_Component,
  AnimalHairballs_Component,
  CatFlap_Component,
  CatLitter_Components,
  DogHarness_Component,
  DogCoat_Component,
  CatBasket_Component,
  DogBasket_Component,
  CaringForCat_Component,
  Canicross_Component,
  CatDiet_Component,
  DogDiet_Component,
  PetFoodCat_Component,
  GPS_Collar_Component,
  PlantsThatAreToxicToAnimals_Component,
  PlantsToPrioritiseForAnimals_Component,
  GoingOnHolidayWithYourPet_Component,
  KongDogToy_Component,
  CatTeeth_Component,
  DogTeeth_Component,
  ProtectingMyCatFromParasites_Component,
  WhichCatBreedToChoose_Component,
  DogGrooming_Component,
  CatSterilisation_Component,
  DogSterilisation_Component,
  MyPetOldAge_Component,
} from '@/app/(connected)/(screens)'
import ChooseVase_Component from '@/app/(connected)/(screens)/(tabs)/localTerroir/gardeningTips_Categories/gardeningTips_SubCategories/containers/components/gardening/chooseVase/ChooseVase_Component'

const basePath =
  '@/assets/imgs/(connected)/screens/localTerroir/gardeningTips_Categories/gardeningTips_SubCategories'
const basePath_Gardening = `${basePath}/gardening`
const basePath_Pets = `${basePath}/pets`
const basePath_Landscaping = `${basePath}/landscaping`

export const contentMap: Record<
  string,
  { image: any; component: React.ReactNode }
> = {
  /////////////////////
  ///// GARDENING /////
  /////////////////////
  choosingAndUsingWaterReservoirPot: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <ChoosingAndUsingWaterReservoirPot_Component />,
  },
  choosingFiveVegetablesForYourVegetableGarden: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <ChoosingFiveVegetablesForYourVegetableGarden_Component />,
  },
  maintainingPotsAndPlanters: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <MaintainingPotsAndPlanters_Component />,
  },
  potsAndPlanters_whichMaterialToChoose: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <PotsAndPlanters_whichMaterialToChoose_Component />,
  },
  choosingGardeningOutfit: {
    image: require(`${basePath_Gardening}/img_gardeningOutfit_1.jpg`),
    component: <ChoosingGardeningOutfit_Component />,
  },
  choosingSecateurs: {
    image: require(`${basePath_Gardening}/img_secateur_1.jpg`),
    component: <ChoosingSecateurs_Component />,
  },
  choosingGardenTarpaulin: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <ChoosingGardenTarpaulin_Component />,
  },
  understandingWinterFleece: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <UnderstandingWinterFleece_Component />,
  },
  mulchingRoses: {
    image: require(`${basePath_Gardening}/img_mulchingRoses_1.jpg`),
    component: <MulchingRoses_Component />,
  },
  feedTheSoil_waterLess: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <FeedTheSoil_waterLess_Component />,
  },
  mulching_cool_ProtectedSoil: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <Mulching_cool_ProtectedSoil_Component />,
  },
  amendmentGarden: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <AmendmentGarden_Component />,
  },
  outdoor_OottingSoil: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <Outdoor_PottingSoil_Component />,
  },
  indoor_PottingSoil: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <Indoor_PottingSoil_Component />,
  },
  // eco_FriendlyGardening // GARDENING
  benefitsOfWaterCollector: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <BenefitsOfWaterCollector_Component />,
  },
  organicWeeding: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <OrganicWeeding_Component />,
  },
  organicSlugControl: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <OrganicSlugControl_Component />,
  },
  tipsForControllingAphids: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <TipsForControllingAphids_Component />,
  },
  eightWaysToReduceWaste: {
    image: require(`${basePath_Gardening}/img_gardeningOutfit_1.jpg`),
    component: <EightWaysToReduceWaste_Component />,
  },
  // permaculturelasagneGardening: {
  //   image: require(`${basePath_Gardening}/img_secateur_1.jpg`),
  //   component: <PermaculturelasagneGardening_Component />,
  // },
  successfulComposting: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <SuccessfulComposting_Component />,
  },
  usingWormComposter: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <UsingWormComposter_Component />,
  },
  gettingRidOdWeeds: {
    image: require(`${basePath_Gardening}/img_mulchingRoses_1.jpg`),
    component: <GettingRidOdWeeds_Component />,
  },
  knowYourSoil: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <KnowYourSoil_Component />,
  },
  adaptingYourGardenToClimateChange: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <AdaptingYourGardenToClimateChange_Component />,
  },
  flatCultivationInPermaculture: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <FlatCultivationInPermaculture_Component />,
  },
  sevenTipsForEcoFriendlyGardening: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <SevenTipsForEcoFriendlyGardening_Component />,
  },
  plantCompanionshipInPermaculture: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <PlantCompanionshipInPermaculture_Component />,
  },
  improvingSoilInPermaculture: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <ImprovingSoilInPermaculture_Component />,
  },
  growingVegetableGardenInPermaculture: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <GrowingVegetableGardenInPermaculture_Component />,
  },
  biocontrolNaturalProtection: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <BiocontrolNaturalProtection_Component />,
  },
  // : {
  //   image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
  //   component: < />,
  // },  : {
  //   image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
  //   component: < />,
  // },  : {
  //   image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
  //   component: < />,
  // },  : {
  //   image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
  //   component: < />,
  // },  : {
  //   image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
  //   component: < />,
  // },  : {
  //   image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
  //   component: < />,
  // },  : {
  //   image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
  //   component: < />,
  // },  : {
  //   image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
  //   component: < />,
  // },  : {
  //   image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
  //   component: < />,
  // },  : {
  //   image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
  //   component: < />,
  // },  : {
  //   image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
  //   component: < />,
  // },  : {
  //   image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
  //   component: < />,
  // },
  choosingScarifier: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <ChoosingScarifier_Component />,
  },
  choosingRotaryTillerAndMotorisedCultivator: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <ChoosingRotaryTillerAndMotorisedCultivator_Component />,
  },
  maintainingYourLawnMower: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <MaintainingYourLawnMower_Component />,
  },
  usingAndMaintainingHedgeTrimmer: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <UsingAndMaintainingHedgeTrimmer_Componeny />,
  },
  choosingHedgeTrimmer: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <ChoosingHedgeTrimmer_Component />,
  },
  choosingLeafBlower: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <ChoosingLeafBlower_Component />,
  },
  choosingPressureWasherAndForWhatUse: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <ChoosingPressureWasherAndForWhatUse_Component />,
  },
  choosingGardenShredder: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <ChoosingGardenShredder_Component />,
  },
  choosingPetrolLawnMower: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <ChoosingPetrolLawnMower_Component />,
  },
  choosingLawnTractor: {
    image: require(`${basePath_Gardening}/img_potsAndPlanters_1.jpg`),
    component: <ChoosingLawnTractor_Component />,
  },
  // poweredEquipment (Matériel motorisé) // GARDENING

  ///////////////////////
  ///// LANDSCAPING /////
  ///////////////////////
  chooseVase: {
    image: require(`${basePath_Landscaping}/img_vase_1.jpg`),
    component: <ChooseVase_Component />,
  },
  dogSport: {
    image: require(`${basePath_Pets}/img_dogSport_1.jpg`),
    component: <DogSport_Component />,
  },
  ////////////////
  ///// PETS /////
  ////////////////
  welcomingKitten: {
    image: require(`${basePath_Pets}/img_welcomingKitten_1.jpg`),
    component: <WelcomingKitten_Component />,
  },
  feedYourDog: {
    image: require(`${basePath_Pets}/img_feedYourDog_1.jpg`),
    component: <FeedYourDog_Component />,
  },
  animalHairballs: {
    image: require(`${basePath_Pets}/img_caringForCat_1.jpg`),
    component: <AnimalHairballs_Component />,
  },
  catFlap: {
    image: require(`${basePath_Pets}/img_catFlap_1.png`),
    component: <CatFlap_Component />,
  },
  catLitter: {
    image: require(`${basePath_Pets}/img_catLitter_1.jpg`),
    component: <CatLitter_Components />,
  },
  dogHarness: {
    image: require(`${basePath_Pets}/img_dogHarness_1.jpg`),
    component: <DogHarness_Component />,
  },
  dogCoat: {
    image: require(`${basePath_Pets}/img_dogCoat_1.jpg`),
    component: <DogCoat_Component />,
  },
  catBasket: {
    image: require(`${basePath_Pets}/img_CatBasket_1.jpg`),
    component: <CatBasket_Component />,
  },
  dogBasket: {
    image: require(`${basePath_Pets}/img_dogBasket_1.jpg`),
    component: <DogBasket_Component />,
  },
  caringForCat: {
    image: require(`${basePath_Pets}/img_caringForCat_1.jpg`),
    component: <CaringForCat_Component />,
  },
  canicross: {
    image: require(`${basePath_Pets}/img_canicross_1.jpg`),
    component: <Canicross_Component />,
  },
  catDiet: {
    image: require(`${basePath_Pets}/img_cat_3.jpg`),
    component: <CatDiet_Component />,
  },
  dogDiet: {
    image: require(`${basePath_Pets}/img_feedYourDog_1.jpg`),
    component: <DogDiet_Component />,
  },
  petFoodCat: {
    image: require(`${basePath_Pets}/img_feedingYourCat_1.jpg`),
    component: <PetFoodCat_Component />,
  },
  GPS_Collar: {
    image: require(`${basePath_Pets}/img_GPS_catCollar_1.png`),
    component: <GPS_Collar_Component />,
  },
  plantsThatAreToxicToAnimals: {
    image: require(`${basePath_Pets}/img_plantsForAnimals_1.jpg`),
    component: <PlantsThatAreToxicToAnimals_Component />,
  },
  plantsToPrioritiseForAnimals: {
    image: require(`${basePath_Pets}/img_plantsForAnimals_1.jpg`),
    component: <PlantsToPrioritiseForAnimals_Component />,
  },
  goingOnHolidayWithYourPet: {
    image: require(`${basePath_Pets}/img_holidaysWithYourPet_1.png`),
    component: <GoingOnHolidayWithYourPet_Component />,
  },
  kongDogToy: {
    image: require(`${basePath_Pets}/img_kongDogToy_1.jpg`),
    component: <KongDogToy_Component />,
  },
  catTeeth: {
    image: require(`${basePath_Pets}/img_catTeeth_1.jpg`),
    component: <CatTeeth_Component />,
  },
  dogTeeth: {
    image: require(`${basePath_Pets}/img_dogTeeth_1.jpg`),
    component: <DogTeeth_Component />,
  },
  protectingMyCatFromParasites: {
    image: require(`${basePath_Pets}/img_caringForCat_1.jpg`),
    component: <ProtectingMyCatFromParasites_Component />,
  },
  whichCatBreedToChoose: {
    image: require(`${basePath_Pets}/img_kitten_1.jpg`),
    component: <WhichCatBreedToChoose_Component />,
  },
  dogGrooming: {
    image: require(`${basePath_Pets}/img_dogGrooming_1.jpg`),
    component: <DogGrooming_Component />,
  },
  catSterilisation: {
    image: require(`${basePath_Pets}/img_catVeterinarian_1.jpg`),
    component: <CatSterilisation_Component />,
  },
  dogSterilisation: {
    image: require(`${basePath_Pets}/img_dogVeterinarian_1.jpg`),
    component: <DogSterilisation_Component />,
  },
  myPetOldAge: {
    image: require(`${basePath_Pets}/img_cat_1.jpg`),
    component: <MyPetOldAge_Component />,
  },
}

export type ContentKey = keyof typeof contentMap
