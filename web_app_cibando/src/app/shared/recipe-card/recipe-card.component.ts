// aggiungere il decoratore input nel core di angular

// eveto figlio per output figlio
import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
percorsoDifficolta = "/../../../src/assets/img/difficolta-";
  /*
    angular.json---impostare: line: 10
   "@schematics/angular:application": {
    "strict": true
 }

    tsconfig.json -- impostare: line 8:
    "strict": false
 */


  @Input() recipes: Recipe[]; //recipes deve essere una variabile di input


  @Output() messaggio = new EventEmitter();  // variabile output che riceve un nuovo evento

  edited = false;

  constructor() { }

  ngOnInit(): void {

  }

inviaTitolo(titolo:string){
  if (titolo) {
    this.messaggio.emit(titolo);
    }
  }

  /*
  edited = false;
  (...)
  saveTodos(): void {
   //show box msg
   this.edited = true;
   //wait 3 Seconds and hide
   setTimeout(function() {
       this.edited = false;
       console.log(this.edited);
   }, 3000);
  }
  */
}
