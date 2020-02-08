import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

import { ShoppingListService } from "./../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     "A test recipe",
  //     "this is simply a test",
  //     "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
  //     [new Ingredient("meat", 2)]
  //   ),
  //   new Recipe(
  //     "A  recipe",
  //     "this is simply a test",
  //     "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
  //     [new Ingredient("buns", 2), new Ingredient("meat", 2)]
  //   )
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
