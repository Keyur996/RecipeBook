import { Component, OnInit } from '@angular/core';
import { Recipe } from './Recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  isRecipe:boolean = false;
  recipeSelected: Recipe = {
    name: '',
    description: '',
    imagePath: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
