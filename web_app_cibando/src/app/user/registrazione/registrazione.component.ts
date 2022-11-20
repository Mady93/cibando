// import {PasswordModule} from 'primeng/password';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './customValidator';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss'],

})
export class RegistrazioneComponent implements OnInit {
  regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;

  //var uguali ai name nel form // fare il controllo dei campi
  form = new FormGroup(
    {
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cognome: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      codiceFiscale: new FormControl('', [
        Validators.required,
        Validators.minLength(16),
      ]),
      dataNascita: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.pattern(this.regex),
        Validators.required,
      ]),
      ripetiPassword: new FormControl('', [Validators.required]),
      accetto: new FormControl('', [Validators.requiredTrue]),
    },
    // CustomValidators.MatchValidator('password','ripetiPassword'));

    [CustomValidators.confrontaPassword('password', 'ripetiPassword')]
  );

  constructor(private userService: UserServiceService , private router: Router) {}

  ngOnInit(): void {}

  // get convalidaPassword(){
  //   return (this.form.getError('mismatch') && this.form.get('ripetiPassword').touched);
  // }

  // PER IL TEMPLATE DRIVEN

  //   onSubmit(form){
  // console.log(form);
  //   };

  onSubmitHome() {
    console.log(this.form.value);
    const utente = { nome: this.form.value.nome, email: this.form.value.email };
    this.userService.datiUtente.next(utente);
    this.router.navigate(['home']);
  }

  //aggiunto
  onSubmitContatti(){
    console.log(this.form.value);
    const user = { nome: this.form.value.nome };
    this.userService.datiUtente.next(user);
    this.router.navigate(['contatti']);
  }
}
