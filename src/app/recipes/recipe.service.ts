import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Italian Carbonara',
      'This is simply a test',
      'https://i.pinimg.com/originals/ca/00/21/ca00210210b7f8ff28195f6a32a558e5.jpg',
      [
        new Ingredient('Pasta', 1),
        new Ingredient('Parmesan', 3)
      ]
    ),
    new Recipe(
      'Beef Steak',
      'This is simply a test',
      'https://catchsuccess.ru/wp-content/uploads/0/f/c/0fcc77f2baf7d98bda2eeaf433c5fd68.jpeg',
      [
        new Ingredient('Meat',1),
        new Ingredient('BBQ Sauce',4)
      ]
    ),
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipes(){
  return this.recipes.slice()
}
  getRecipe(index:number){
    return this.recipes[index]
  }
addIngredientsToShoppingList(ingredients: Ingredient[]){
  this.slService.addIngredients(ingredients)
}
}

