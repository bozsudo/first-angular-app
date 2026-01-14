import {Component, Input} from '@angular/core';
import {Recipe} from "../recipes/recipe.model";
import {RecipeService} from "../recipes/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  @Input() selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }
}
