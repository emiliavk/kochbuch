import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeItemComponent } from "./recipe-item.component";
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItemComponent],
  templateUrl: './recipe-list.component.html',
  styles: ``
})
export class RecipeListComponent implements OnInit{
@Output() recipeSelected = new EventEmitter<Recipe>();
recipe = new Recipe('Dummy','Dummy','assets/dummy.png')
Selected: any;
selectedRecipe: Recipe | undefined;

  constructor()
  {
  }

  ngOnInit(){
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
