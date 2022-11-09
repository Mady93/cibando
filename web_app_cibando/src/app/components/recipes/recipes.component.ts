import { Component, OnInit } from '@angular/core';
//importare solo il modello ed il service, mentre il mock no
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  ricette:Recipe[] = []; // creo parametro ricette array vuoto basato sull'interafaccia si ricette
  //Ora si puo usare OnInit per prendere il metodo getRecipes, se la risp è positiva mettila nelle ricette

  //finalmente si usa per la prima volta il costruttore
  //egli serve a costruire, quindi va a prendere tutto del services
  //il services va inniettato nelcostruttore
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    // vatti a sottoscrivere a quello che dice qst metodo
    this.recipeService.getRecipes().subscribe({
      //oppure singola --- dove non si puo aggiungere l'errore
      //this.recipeService.getRecipes().subscribe(res=> this.ricette = res)
      next:(res)=>{
        this.ricette = res;
      },
      error:(e)=>{
        console.error(e);
      }
    })


  }

}
