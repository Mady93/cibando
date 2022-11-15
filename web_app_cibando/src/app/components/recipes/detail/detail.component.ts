import { Recipe } from './../../../models/recipe.model';
import { Component, OnInit } from '@angular/core';

//####### router gestisce le rotte dalla classe
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  //######## per associre i dati creare la variabile
  ricetta: Recipe;
  percorsoDifficolta = "../../../../assets/img/difficolta-";


  //######## quando uso i service -- si come il service e injectable, ora devo inniettare nelcostruttore il servizio
  //##### activatedRoute -- prendo la rotta attivata
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //fa partire l evento
    this.onGetRecipe2();
  }

  onGetRecipe(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));
    this.recipeService.getRecipe(id).subscribe({
      next: (res) => {
        this.ricetta = res;
        console.log(this.ricetta);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  //#### meglio usare il 2 metodo
  onGetRecipe2():void{
    this.activatedRoute.params.subscribe((urlParams)=>{
      const id = urlParams['_id'];
      const idN = Number(id);
      if(idN){
      this.recipeService.getRecipe(idN).subscribe(res => this.ricetta = res);
  }
});
  }



}
