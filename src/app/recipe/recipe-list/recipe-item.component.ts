import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-item',
  imports: [CommonModule],
  templateUrl: './recipe-item.component.html',
  styles: ``
})
export class RecipeItemComponent implements OnInit{
 @Input() recipe!: Recipe;
 Select: any;
 @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(){}
  ngOnInit(){}

  onSelect() {
    this.recipeSelected.emit(this.recipe)
  }
}
