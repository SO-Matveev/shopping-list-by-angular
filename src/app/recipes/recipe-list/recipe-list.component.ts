import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Italian Carbonara',
      'This is simply a test',
      'https://i.pinimg.com/originals/ca/00/21/ca00210210b7f8ff28195f6a32a558e5.jpg'
    ),
    new Recipe(
      'Beef Steak',
      'This is simply a test',
      'https://catchsuccess.ru/wp-content/uploads/0/f/c/0fcc77f2baf7d98bda2eeaf433c5fd68.jpeg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
