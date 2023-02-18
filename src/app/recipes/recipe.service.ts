import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>()
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Italian Carbonara',
  //     'This is simply a test',
  //     'https://i.pinimg.com/originals/ca/00/21/ca00210210b7f8ff28195f6a32a558e5.jpg',
  //     [
  //       new Ingredient('Pasta', 1),
  //       new Ingredient('Parmesan', 3)
  //     ]
  //   ),
  //   new Recipe(
  //     'Beef Steak',
  //     'This is simply a test',
  //     'https://catchsuccess.ru/wp-content/uploads/0/f/c/0fcc77f2baf7d98bda2eeaf433c5fd68.jpeg',
  //     [
  //       new Ingredient('Meat',1),
  //       new Ingredient('BBQ Sauce',4)
  //     ]
  //   ),
  // ];
  private recipes: Recipe[]=[];
  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]){
    this.recipes=recipes
    this.recipesChanged.next(this.recipes.slice()  )

  }

  getRecipes(){
  return this.recipes.slice()
}
  getRecipe(index:number){
    return this.recipes[index]
  }
addIngredientsToShoppingList(ingredients: Ingredient[]){
  this.slService.addIngredients(ingredients)
}
addRecipe(recipe: Recipe){
  this.recipes.push(recipe)
  this.recipesChanged.next(this.recipes.slice())
}
updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
}
deleteRecipe(index:number){
    this.recipes.splice(index,1)
    this.recipesChanged.next(this.recipes.slice())
}
}

