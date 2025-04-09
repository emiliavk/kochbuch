import { Component } from '@angular/core';
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-recipe',
  imports: [RecipeListComponent, RecipeDetailComponent, CommonModule, RouterModule], 
  templateUrl: './recipe.component.html',
  styles: ``
})
export class RecipeComponent {

  constructor(){}
}
