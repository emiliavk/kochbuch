import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { r_routes } from './recipe/recipe.routing';
import { HomeComponent } from './home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'rezepte', component: RecipeComponent, children: r_routes },
    { path: 'einkaufsliste', component: ShoppingListComponent }
];

export const routing = RouterModule.forRoot(routes);