import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  ricette: Recipe[] = [];
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.onGetRecipe();
  }

  onGetRecipe(): void {
    (res: any) => {
      let testo = res;
      this.recipeService.searchRecipes(testo).subscribe({
        next: (res) => {
          this.ricette = res;
        },
        error: (err) => {
          console.log(err);
        },
      });
    };
  }
}
