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
      'A test Recipe',
      'This is simply a test',
      'https://i.pinimg.com/originals/ca/00/21/ca00210210b7f8ff28195f6a32a558e5.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
