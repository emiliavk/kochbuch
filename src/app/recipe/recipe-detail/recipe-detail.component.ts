import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.component.html',
  styles: ``
})
export class RecipeDetailComponent {
selectedRecipe!: Recipe;

}
