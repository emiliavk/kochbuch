import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';
import { Ingredient } from '../../ingredient.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  imports: [CommonModule],
  templateUrl: './recipe-detail.component.html',
  styles: ``
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe!: Recipe;
  recipeId!: number;

  private subscription!: Subscription;

  constructor(private recipeService: RecipeService, private sls: ShoppingListService, private activatedRoute: ActivatedRoute, private router: Router, ) {}


  onAddToList(){
    this.sls.addIngredients(this.selectedRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['/rezepte', this.recipeId, 'bearbeiten'])
  }

  onDelete() {
    this.router.navigate(['/rezepte']);
    this.recipeService.deleteRecipe(this.recipeId);
  }


  ngOnInit(){
    this.subscription = this.activatedRoute.params.subscribe(
      params => {
        this.recipeId = +params ['id'];
        this.selectedRecipe = this.recipeService.getRecipe(+params['id'])
      }
    );
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
    }
}

