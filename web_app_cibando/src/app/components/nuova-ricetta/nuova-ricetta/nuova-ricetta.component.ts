import { Component, OnInit } from '@angular/core';
import { RecipeService } from './../../../services/recipe.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-nuova-ricetta',
  templateUrl: './nuova-ricetta.component.html',
  styleUrls: ['./nuova-ricetta.component.scss']
})
export class NuovaRicettaComponent implements OnInit {

  form = new FormGroup(
    {
      title: new FormControl('', [
        Validators.required, Validators.minLength(3)]),

      description: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),

      difficulty: new FormControl(1, [Validators.required]),

      image: new FormControl('', [
        Validators.required,
      ]),

      published: new FormControl(false),

    },
  );


  modale:boolean;
  percorsoDifficolta = "../../../../assets/img/difficolta-";

  constructor(private recipeService:RecipeService, private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(){
  //   const ricetta: Recipe ={
  //   "_id": 0,
  //   "title": this.form.value.title,
  //   "description": this.form.value.description,
  //   "image": this.form.value.image,
  //   "difficulty": Number(this.form.value.difficulty),
  //   "published": Boolean(this.form.value.published)
  // }
    console.log(this.form.value);
    this.recipeService.postRecipe(this.form.value).subscribe({
      next:(res)=>res,
      error:(err)=>console.log(err)
    });
    this.modale=true;
    }

    nuovaRicetta(){
      this.router.navigate(['nuova-ricetta']);
      this.modale=false;
      this.form.reset();
    }

    andareRicette(){
      this.router.navigate(['ricette']);
    }

}

