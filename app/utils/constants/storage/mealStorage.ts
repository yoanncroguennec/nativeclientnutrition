// storage/mealStorage.ts

import AsyncStorage from '@react-native-async-storage/async-storage';
import { DayMeals } from '@/app/utils/constants/types/mealTypes/MealTypes';

const STORAGE_KEY = 'MEAL_PLANNER_DATA';

export const saveDayMeals = async (dayMeals: DayMeals): Promise<void> => {
  const existing = await getAllMeals();
  const updated = { ...existing, [dayMeals.date]: dayMeals };
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const getAllMeals = async (): Promise<Record<string, DayMeals>> => {
  const json = await AsyncStorage.getItem(STORAGE_KEY);
  return json ? JSON.parse(json) : {};
};

export const getMealsForDate = async (date: string): Promise<DayMeals | null> => {
  const data = await getAllMeals();
  return data[date] || null;
};
