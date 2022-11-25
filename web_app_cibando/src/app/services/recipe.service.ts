import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
// import { RECIPES } from './../mocks/recipes.mock';
import{ Observable,of, ReplaySubject} from 'rxjs'; // of  si usa con i file mock per simulare le chiamate
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiBaseUrl = "api/recipes"; //function get<Recipe>

  // nuovaRicettaService = new ReplaySubject(); // pag nuova-ricetta popup

  create = new ReplaySubject();

  constructor(private http: HttpClient) { }

  //prendo tutte le ricette
  getRecipes(){
// return of (RECIPES);   // -->mock commentato

                      //prendere il metodo get da routes server
return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`); // /creaRicetta/${this.id}`

//return return this.http.get<Recipe[]>(this.apiBaseUrl + '/creaRicetta/' + this.id);
//return return this.http.get<Recipe[]>(this.apiBaseUrl + '/')
  }




 //### ritorna il dettaglio in base al id -- evento ----> mock
//  getRecipe(id:number):Observable<Recipe>{
// const recipe = RECIPES.find(recipe => recipe._id === id);
// return of(recipe);
// }


// collegamento router pagina dettaglio
getRecipe(id: string):Observable<Recipe>{
  return this.http.get<Recipe>(`${this.apiBaseUrl}/${id}`);
  }



  //crea ricetta - componente nuova-ricetta.ts
postRecipe(form:Recipe): Observable<Recipe>{
return this.http.post<Recipe>(`${this.apiBaseUrl}/`,form);
}


  }


