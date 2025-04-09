import { RecipeStartComponent } from "./recipe-start.component";
import { Routes } from "@angular/router";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeComponent } from "./recipe.component";

export const r_routes: Routes = [
    { path: '', component: RecipeComponent, children: [,
    { path: '', component: RecipeStartComponent},
    { path: 'neu', component: RecipeEditComponent},
    { path: ':id', component: RecipeDetailComponent},
    { path: ':id/bearbeiten', component: RecipeEditComponent}
]}
];