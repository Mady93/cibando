// aggiungere il decoratore input nel core di angular

// eveto figlio per output figlio
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {

  @Output() messaggio = new EventEmitter(); // variabile output che riceve un nuovo evento
  @Input() pag: string;
  percorsoDifficolta = '/../../../src/assets/img/difficolta-';

  //var ricette per gestisce le pagine
   page = 1;
  ricettePerPagina = 4;
  pagingNumber = 0;



//var cer gestisce le pagine
  ricette$: Observable<Recipe[]>;
  totRicette: Recipe[];






  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    // this.recipeService.getRecipes().subscribe({
    //   next: (res) => {
    //     this.ricette = res;
    //     if (this.pag == 'home') {
    //       this.ricette = this.ricette.sort((a, b) => b._id - a._id).slice(0, 4);
    //     } else {
    //       this.ricette = this.ricette.sort((a, b) => b._id - a._id);
    //     }
    //   },
    //   error: (e) => {
    //     console.error(e);
    //   },
    // });
    if(this.pag==='home'){

      this.ricette$ = this.recipeService.getRecipes().pipe(
        map(res => res.filter(ricetteFiltrate => ricetteFiltrate.difficulty < 6)),
        map(res => res.slice(0,4)),
        map(res => this.totRicette = res),

    )}else{

    this.ricette$ = this.recipeService.getRecipes().pipe(
      map(res => res.filter(ricetteFiltrate => ricetteFiltrate.difficulty < 6)),
      map(res => this.totRicette = res),

    )}

    // pagine
    this.pagine();
  }



  inviaTitolo(titolo: string) {
    if (titolo) {
      this.messaggio.emit(titolo);
    }
  }


  //metodo che gestisce le pagine
  pagine() {
    let tot;
    if (this.totRicette) {
      tot = this.totRicette.length;
    }
    this.page = 1;
    this.pagingNumber = 0;
    this.pagingNumber = Math.ceil(
      this.totRicette?.length / this.ricettePerPagina / 4); //quante pag deve generare
  }
}
