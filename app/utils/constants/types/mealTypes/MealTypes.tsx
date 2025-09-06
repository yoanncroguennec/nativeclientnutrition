// types/mealTypes.ts

export type MealType = 'Déjeuner' | 'repas du midi' | 'dinner' | 'snack';

export interface Meal {
  type: MealType;
  name: string;
  ingredients?: string[];
}

export interface DayMeals {
  date: string; // format ISO YYYY-MM-DD
  meals: Meal[];
}
