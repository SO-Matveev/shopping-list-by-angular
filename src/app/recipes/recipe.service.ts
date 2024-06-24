import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";
import { Store } from "@ngrx/store";
import * as ShoppingListActions from "../shopping-list/store/shopping-list.actions";
import * as fromShoppingList from "../shopping-list//store/shopping-list.reducer";


@Injectable()
export class RecipeService {
  recipesChanged: Subject<Recipe[]> = new Subject<Recipe[]>()

  private recipes: Recipe[] = [];

  constructor(
    private store: Store<fromShoppingList.AppState>,
  ) {}

  setRecipes(recipes: Recipe[]): void {
    this.recipes = recipes
    this.recipesChanged.next(this.recipes.slice())
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice()
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients))
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe)
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1)
    this.recipesChanged.next(this.recipes.slice())
  }
}

