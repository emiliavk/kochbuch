import { Recipe } from "./recipe.model";
import { Ingredient } from "../ingredient.model";
import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import 'rxjs/Rx';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged= new EventEmitter<Recipe[]>();

    private recipes: Recipe[] =[ 
      new Recipe(
        'Schnitzel',
        'Sehr lecker',
        'assets/Schnitzel.png',
        [
          new Ingredient('Pommes', 10),
          new Ingredient('Schnitzel', 1),
        ]
      ),
      new Recipe('Salat','Auch lecker?','assets/Salat.jpg', [])
    
      ];

    constructor(private http: HttpClient){

    }       

      getRecipes() {
        return this.recipes;
      }

      getRecipe(id: number) {
        return this.recipes[id];
      }

      deleteRecipe(id: number) {
        this.recipes.splice(id, 1);
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
      }

      editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
        this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
      }

      storeData(){
        const body = JSON.stringify(this.recipes);
        const httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
         return this.http.put(
          'https://ng-kochbuch-default-rtdb.europe-west1.firebasedatabase.app/recipe.json', body, {headers: httpHeaders}
        );
      }

      fetchData(){
        return this.http.get(
          'https://ng-kochbuch-default-rtdb.europe-west1.firebasedatabase.app/recipe.json'
        ).subscribe(
          (recipes: Recipe[]) => {
            this.recipes = recipes
            this.recipesChanged.emit(this.recipes);
          }
        )
      }
}