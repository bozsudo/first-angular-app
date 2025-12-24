import {Component, EventEmitter, Output} from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Carbonara',
      'This classic Italian pasta dish combines a silky cheese sauce with crisp pancetta and black pepper.',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg'
    ),
    new Recipe(
      'Spaghetti Bolognese',
      'Spaghetti is a classic, long, thin, cylindrical Italian pasta made from durum wheat, water, and sometimes eggs.',
      'https://cravinghomecooked.com/wp-content/uploads/2024/07/spaghetti-bolognese-1-22.jpg'
    )
  ];
  @Output() onRecipeSelected = new EventEmitter<Recipe>();

  onSelect(recipe: Recipe) {
    this.onRecipeSelected.emit(recipe);
  }
}
