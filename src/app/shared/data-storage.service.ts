import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import {exhaustMap, map, take, tap} from "rxjs";
import {AuthService} from "../auth/auth.service";

@Injectable({providedIn:'root'})
export class DataStorageService{
  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService){}

  storeRecipes(){
  const recipes = this.recipeService.getRecipes();
  return this.http.put('//URL FireBase Project', recipes)
    .subscribe(response =>{});
  }
  fetchRecipes(){
    return this.http.get<Recipe[]>('//URL FireBase Project', {
      params: new HttpParams().set('auth',user.token)})
      .pipe(map(recipes=>{
        return recipes.map(recipe=>{return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients: []}})
      }),
        tap(recipes=>{
          this.recipeService.setRecipes(recipes)
        })
      )
  }
}



