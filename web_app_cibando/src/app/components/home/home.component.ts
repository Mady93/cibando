import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  evidenziato = false;
  //sfondo = 'background-color: red';
  //sfondo = 'red';

  nome: string;
  email: string;

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    console.log('Sei entrato nella home');
    this.riceviDatiUtente();
  }

  onEvidenziazione() {
    this.evidenziato = !this.evidenziato;
  }

  riceviDatiUtente() {
    this.userService.datiUtente.subscribe((res: any) => {
       this.nome = res.nome;
       this.email = res.email;
    });
  }

  closeModal() {
    //rimozione selettiva
    localStorage.removeItem('nome');
    localStorage.removeItem('email');

    //   //RIMUOVE Tutte
    localStorage.clear();
    this.nome = '';
    this.email = '';
  }

  ngOnDestroy(): void {
    console.log('Sei uscito dalla home');
    console.log('Destroy app');
  }
}
