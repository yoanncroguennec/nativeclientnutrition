// src/services/nutritionApi.ts
export const getNutritionFacts = async (foodName: string) => {
  const appId = 'YOUR_EDAMAM_APP_ID'
  const appKey = 'YOUR_EDAMAM_API_KEY'

  const response = await fetch(
    `https://api.edamam.com/api/nutrition-data?app_id=${appId}&app_key=${appKey}&ingr=1%20${encodeURIComponent(foodName)}`,
  )
  const data = await response.json()
  return {
    calories: data.calories,
    fat: data.totalNutrients.FAT?.quantity,
    protein: data.totalNutrients.PROCNT?.quantity,
    carbs: data.totalNutrients.CHOCDF?.quantity,
  }
}
