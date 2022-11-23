import { Recipe } from 'src/app/models/recipe.model';
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

  onGetRecipe2():void{
    this.activatedRoute.params.subscribe((urlParams)=>{
      const id = urlParams['_id'];
      // const idN = Number(id);
      if(id){
      this.recipeService.getRecipe(id).subscribe(res => this.ricetta = res);
  }
});
  }

}
