import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    {
      name: 'Apple',
      amount: 50
    },
    {
      name: 'Banana',
      amount: 100
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
