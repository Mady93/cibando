import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss'],
})
export class RegistrazioneComponent implements OnInit {

  //var uguali ai name nel form // fare il controllo dei campi
  form = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cognome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    codiceFiscale: new FormControl('', [Validators.required, Validators.minLength(16)]),
    dataNascita: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    ripetiPassword: new FormControl('', [Validators.required]),
    accetto: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  // PER IL TEMPLATE DRIVEN

  //   onSubmit(form){
  // console.log(form);
  //   };

  onSubmit() {
    console.log(this.form.value);
  }
}
