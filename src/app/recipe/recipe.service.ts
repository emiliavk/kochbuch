import { Recipe } from "./recipe.model";
import { Ingredient } from "../ingredient.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
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

      recipeSelected = new EventEmitter<Recipe>();

      getRecipes() {
        return this.recipes;
      }
}