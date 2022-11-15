// aggiungere il decoratore input nel core di angular

// eveto figlio per output figlio
import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

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


  //@Input() recipes: Recipe[]; //recipes deve essere una variabile di input

  @Output() messaggio = new EventEmitter();  // variabile output che riceve un nuovo evento

  @Input() pag: string;

  ricette:Recipe[] = [];


  constructor(private recipeService: RecipeService) { }


  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
     next:(res)=>{
       this.ricette = res;
       if(this.pag =='home'){
        this.ricette= this.ricette.sort((a,b) => b._id - a._id).slice(0,4)
       }
     },
     error:(e)=>{
       console.error(e);
     }
   });
 }

inviaTitolo(titolo:string){
  if (titolo) {
    this.messaggio.emit(titolo);
    }
}
}
