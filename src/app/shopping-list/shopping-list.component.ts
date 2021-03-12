import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  private _sub: Subscription = new Subscription();

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this._sub = this.slService.ingredientsChanged.subscribe( (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
    });
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

}
