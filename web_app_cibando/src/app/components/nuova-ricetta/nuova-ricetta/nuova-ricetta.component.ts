import { Component, OnInit } from '@angular/core';
import { RecipeService } from './../../../services/recipe.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-nuova-ricetta',
  templateUrl: './nuova-ricetta.component.html',
  styleUrls: ['./nuova-ricetta.component.scss']
})
export class NuovaRicettaComponent implements OnInit {

  editor = ClassicEditor;

  editorConfig = {
    toolbar: {
        items: [
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            // 'indent',
            // 'outdent',
            // '|',
            'codeBlock',
            // 'imageUpload',
            // 'blockQuote',
            // 'insertTable',
            'undo',
            'redo',
        ]
    },
    image: {
        toolbar: [
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageTextAlternative'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    },
    height: 300,
};

  form = new FormGroup(
    {
      title: new FormControl('', [
        Validators.required, Validators.minLength(3)]),

      description: new FormControl(''),
      //, [
      //   // Validators.required,
      //   // Validators.minLength(3),
      // ]),

      difficulty: new FormControl(0),
        //, [Validators.required]),

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
    console.log(this.form.value);
    this.recipeService.postRecipe(this.form.getRawValue()).subscribe({
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

