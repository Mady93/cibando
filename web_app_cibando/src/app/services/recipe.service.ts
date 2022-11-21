import { Injectable } from '@angular/core';
//importiamo sia il modello sia il mock
import { Recipe } from '../models/recipe.model';
import { RECIPES } from './../mocks/recipes.mock';
import{ Observable,of, ReplaySubject } from 'rxjs'; // of  si usa con i file mock per simulare le chiamate
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiBaseUrl = "api/recipes";




  constructor(private http: HttpClient) { }

  //prendo tutte le ricette -- commentare il mock sotto
  getRecipes(): Observable <Recipe[]>{
// return of (RECIPES);   // -->mock commentato

                      //prendere il metodo get da routes server
return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`); // /creaRicetta/${this.id}`

//return return this.http.get<Recipe[]>(this.apiBaseUrl + '/creaRicetta/' + this.id);
//return return this.http.get<Recipe[]>(this.apiBaseUrl + '/')
  }




 //### ritorna il dettaglio in base al id -- evento
//  getRecipe(id:number):Observable<Recipe>{
// const recipe = RECIPES.find(recipe => recipe._id === id);
// return of(recipe);
// }


// collegamento router pagina dettaglio
getRecipe(id: string):Observable<Recipe>{
  return this.http.get<Recipe>(`${this.apiBaseUrl}/${id}`);
  }
}


