import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../recipe.service';
import { inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe-item.component.html',
  styles: ``
})
export class RecipeItemComponent implements OnInit{
@Input() recipe!: Recipe;
@Input() recipeId!: number;

  private recipeService = inject(RecipeService);  
  
  ngOnInit(){}


}
