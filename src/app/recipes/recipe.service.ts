import { Injectable } from "@angular/core";

import { ShoppingListService } from "./../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.module";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "this is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      [new Ingredient("meat", 2)]
    ),
    new Recipe(
      "A  recipe",
      "this is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      [new Ingredient("buns", 2), new Ingredient("meat", 2)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
