import { RecipesComponent } from './../recipes/recipes.component';
import { Component, OnInit ,OnDestroy} from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  evidenziato = false;
//sfondo = 'background-color: red';
//sfondo = 'red';
ricette:Recipe[] = [];

  constructor(private recipeService: RecipeService) { }



  ngOnInit(): void {
   // vatti a sottoscrivere a quello che dice qst metodo
   this.recipeService.getRecipes().subscribe({
    //oppure singola --- dove non si puo aggiungere l'errore
    //this.recipeService.getRecipes().subscribe(res=> this.ricette = res)
    next:(res)=>{
      this.ricette = res;
      this.ricette = this.ricette.sort((a,b) => b._id - a._id).slice(0,4);
    },
    error:(e)=>{
      console.error(e);
    }
  });
  }

  onEvidenziazione(){
    this.evidenziato = !this.evidenziato;
  }

  ngOnDestroy():void{
    console.log('Sei uscito dalla home');
    console.log('Destroy app');
  }
}
