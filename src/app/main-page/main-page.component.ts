import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, OnInit } from '@angular/core';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem){
      this.budgetItems.push(newItem);
  }

  deleteItem(item: BudgetItem){
    let index = this.budgetItems.indexOf(item);
      this.budgetItems.splice(index, 1);
  }

  updateItem(updateEvent: UpdateEvent) {
    // result is the update budget item
    // replace the item with the updated/submitted item from the form
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;
  }

}
