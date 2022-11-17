import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  titoloRicevuto: string;




  constructor() { }

  ngOnInit(): void {
          }





//////////////////DA SAPPERE ///////////////////////////////

  // metodo del padre per ricevere l'output del figlio recipe-card.component.ts
  riceviTitolo(e: any){
    if (this.titoloRicevuto && this.titoloRicevuto === e) {
      this.titoloRicevuto ='';
    }else{
      this.titoloRicevuto = e;
    }
  }
  }
