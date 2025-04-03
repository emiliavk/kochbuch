import { Component, OnInit, } from '@angular/core';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';
import { Ingredient } from '../../ingredient.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  imports: [CommonModule],
  templateUrl: './recipe-detail.component.html',
  styles: ``
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe!: Recipe;

  constructor(private recipeService: RecipeService, private sls: ShoppingListService) {}

  ngOnInit(){
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => this.selectedRecipe = recipe
    );

  }

  onAddToList(){
    this.sls.addIngredients(this.selectedRecipe.ingredients);
  }
}



