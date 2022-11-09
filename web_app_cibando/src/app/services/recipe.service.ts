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

  //metodo che andra a fare una chiamata mockata che restituira tutte le ricette
  // tipizzato come obj observable e come ricette- E un metodo asincrono per le ricette
  getRecipes(): Observable <Recipe[]>{
    // mi ritorna il contenuto del mock ricette.
    //Alla fine al posto di questo ci metto la chiamata, mentre il resto rimane uguale
return of (RECIPES);
  }
}
 // creo componente recipes
