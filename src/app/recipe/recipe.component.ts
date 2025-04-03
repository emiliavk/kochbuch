import { Component } from '@angular/core';
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { Recipe } from './recipe.model';
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";

@Component({
  selector: 'app-recipe',
  imports: [RecipeListComponent, RecipeDetailComponent],
  templateUrl: './recipe.component.html',
  styles: ``
})
export class RecipeComponent {
  selectedRecipe!: Recipe;

  constructor(){}
}
