import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Carbonara',
      'This classic Italian pasta dish combines a silky cheese sauce with crisp pancetta and black pepper.',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg',
      [
        new Ingredient('Pancetta', 1),
        new Ingredient('Spaghetti', 1),
        new Ingredient('Eggs', 2),
      ]
    ),
    new Recipe(
      'Spaghetti Bolognese',
      'Spaghetti is a classic, long, thin, cylindrical Italian pasta made from durum wheat, water, and sometimes eggs.',
      'https://cravinghomecooked.com/wp-content/uploads/2024/07/spaghetti-bolognese-1-22.jpg',
      []
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
