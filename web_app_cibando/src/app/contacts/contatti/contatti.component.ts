import { UserServiceService } from 'src/app/services/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent implements OnInit {

  nome:string;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.riceviDatiUtente();
  }

  riceviDatiUtente() {
    this.userService.datiUtente.subscribe((res: any) => {
       this.nome = res.nome;
    });
  }

  closeModal() {
    //rimozione selettiva
    localStorage.removeItem('nome');

    //   //RIMUOVE Tutte
    localStorage.clear();
    this.nome = '';
  }
}
