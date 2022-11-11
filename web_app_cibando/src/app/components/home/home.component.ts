import { Component, OnInit ,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  evidenziato = false;
//sfondo = 'background-color: red';
//sfondo = 'red';


  constructor() { }



  ngOnInit(): void {
    console.log('Sei entrato nella home');
  }

  onEvidenziazione(){
    this.evidenziato = !this.evidenziato;
  }

  ngOnDestroy():void{
    console.log('Sei uscito dalla home');
    console.log('Destroy app');
  }
}
