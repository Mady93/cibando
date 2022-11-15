import { Injectable } from '@angular/core';
//importiamo sia il modello sia il mock
import { Recipe } from '../models/recipe.model';
import { RECIPES } from './../mocks/recipes.mock';
import{ Observable,of } from 'rxjs'; // of  si usa con i file mock per simulare le chiamate

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Observable <Recipe[]>{
return of (RECIPES);
  }
 // creo componente recipes


 //### ritorna il dettaglio in base al id -- evento
 getRecipe(id:number):Observable<Recipe>{
const recipe = RECIPES.find(recipe => recipe._id === id);
return of(recipe);
}

}


