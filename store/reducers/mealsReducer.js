import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/mealsAction";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      console.log("Set_filters: ", appliedFilters);
      console.log("appliedFilters.glutenFree : ", appliedFilters.glutenFree);
      console.log("appliedFilters.lactoseFree : ", appliedFilters.lactoseFree);
      console.log("appliedFilters.vegan : ", appliedFilters.vegan);
      console.log("appliedFilters.vegetarian : ", appliedFilters.vegetarian);
      const updateFilteredMeals = state.meals.filter((meals) => {
        if (appliedFilters.glutenFree && !meals.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meals.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegan && !meals.isVegan) {
          return false;
        }
        if (appliedFilters.vegetarian && !meals.isVegetarian) {
          return false;
        }
        return true;
      });
      console.log("----------------------------");
      console.log("updateFilteredMeals: ", updateFilteredMeals);
      return { ...state, filteredMeals: updateFilteredMeals };
    default:
      return state;
  }
};

export default mealReducer;
