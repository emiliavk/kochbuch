import { Component, OnInit } from '@angular/core';
import { ShoppingListAddComponent } from "./shopping-list-add.component";
import { Ingredient } from '../ingredient.model';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  imports: [ShoppingListAddComponent, CommonModule],
  templateUrl: './shopping-list.component.html',
  styles: ``
})
export class ShoppingListComponent implements OnInit{
  Ingredients: Ingredient[] = [];
  selectedIngredient: Ingredient;

  constructor(private sls: ShoppingListService) {
  }
  
  onSelectItem(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
  }

  onCleared(){
    this.selectedIngredient = null;
  }

  ngOnInit() {
    this.Ingredients = this.sls.getIngredients();
  }

}