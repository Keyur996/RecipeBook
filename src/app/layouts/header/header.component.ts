import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  @Output() loadFeature: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Recipes Book',
        icon: 'pi pi-book',
        routerLink: '/recipes',
      },
      {
        label: 'Shopping List',
        icon: 'pi pi-shopping-cart',
        routerLink: '/shopping-list'
      }
    ]
  }

}
