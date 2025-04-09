import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from "./recipe-item.component";
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styles: ``
})
export class RecipeListComponent implements OnInit{
  recipes!: Recipe[];

  private recipeService = inject(RecipeService);
  private router = inject(Router);

  onNewRecipe() {
    this.router.navigate(['/rezepte', 'neu'])
  }

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
    console.log(this.recipes)

    this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => this.recipes = recipes
    );
  }
}
