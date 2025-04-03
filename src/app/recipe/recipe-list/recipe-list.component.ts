import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from "./recipe-item.component";
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styles: ``
})
export class RecipeListComponent implements OnInit{

  recipes!: Recipe[];

  private recipeService = inject(RecipeService);

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();

    console.log(this.recipes)
  }

  onSelected(recipe: Recipe){
  }

}
