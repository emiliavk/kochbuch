import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../recipe.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  imports: [CommonModule],
  templateUrl: './recipe-item.component.html',
  styles: ``
})
export class RecipeItemComponent implements OnInit{
@Input() recipe!: Recipe;

  private recipeService = inject(RecipeService);  ngOnInit(){}

  onSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
