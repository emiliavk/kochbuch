import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Ingredient } from '../ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './shopping-list-add.component.html',
  styles: ``
})
export class ShoppingListAddComponent implements OnInit, OnChanges{
  @Input() selectedIngredient: Ingredient;
  @Output() cleared = new EventEmitter();
  isAdd = true;

  constructor(private sls: ShoppingListService){

  }
  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.selectedIngredient.currentValue == null) {
      this.selectedIngredient = {name: null, amount: null};
      this.isAdd = true;
    } else {
      this.isAdd = false;       
    }
  }

  onSubmit(form: NgForm){
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if (!this.isAdd) {
      // bearbeiten
      this.sls.editIngredient(this.selectedIngredient, newIngredient);
    } else {
      // neu
     this.sls.addIngredient(newIngredient);
    }
    this.onClear(form);
  }

  onClear(form: NgForm){
    this.cleared.emit();
    form.resetForm();
  }

  onDelete(form: NgForm){
    this.sls.deleteIngredient(this.selectedIngredient);
    this.onClear(form);
  }

}
