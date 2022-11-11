// aggiungere il decoratore input nel core di angular
import { Component, OnInit , Input} from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  /*
    angular.json---impostare: line: 10
   "@schematics/angular:application": {
    "strict": true
 }

    tsconfig.json -- impostare: line 8:
    "strict": false
 */

    //recipes deve essere una variabile di input
  @Input() recipes: Recipe[];

  constructor() { }

  ngOnInit(): void {

  }

}
