// aggiungere il decoratore input nel core di angular

// eveto figlio per output figlio
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  //var per gestisce le pagine
  ricette: Recipe[] = [];
  page = 1;
  ricettePerPagina = 4;
  pagingNumber = 0;




  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res;
        if (this.pag == 'home') {
          this.ricette = this.ricette.sort((a, b) => b._id - a._id).slice(0, 4);
        } else {
          this.ricette = this.ricette.sort((a, b) => b._id - a._id);
        }
      },
      error: (e) => {
        console.error(e);
      },
    });

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
    if (this.ricette) {
      tot = this.ricette.length;
    }
    this.page = 1;
    this.pagingNumber = 0;
    this.pagingNumber = Math.ceil(
      this.ricette.length / this.ricettePerPagina / 4
    ); //quante pag deve generare
  }
}
