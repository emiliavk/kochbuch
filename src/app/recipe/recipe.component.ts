import { Component } from '@angular/core';
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { CommonModule } from '@angular/common';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  imports: [RecipeListComponent, RecipeDetailComponent, CommonModule],
  templateUrl: './recipe.component.html',
  styles: ``,
  providers: [RecipeService]
})
export class RecipeComponent {

  constructor(){}
}
