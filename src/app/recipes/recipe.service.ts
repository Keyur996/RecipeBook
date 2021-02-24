import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './Recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeChanged: Subject<Recipe[]> = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    {
      name: 'Recipe 01',
      description: 'Hello',
      imagePath: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563'
    },
    {
      name: 'Recipe 02',
      description: 'This is my second Recipe ..',
      imagePath: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563'
    } 
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
}
