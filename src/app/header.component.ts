import { Component } from '@angular/core';
import { DropdownDirective } from './shopping-list/dropdown.directive';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { RecipeService } from './recipe/recipe.service';


@Component({
  selector: 'app-header',
  imports: [DropdownDirective, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService){}

  onStore(){
    this.recipeService.storeData()
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onFetch(){
    this.recipeService.fetchData();
  }
}
