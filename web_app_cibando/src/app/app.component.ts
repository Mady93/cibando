import { Component } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faHouzz } from '@fortawesome/free-brands-svg-icons';
import{ faRegistered} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web_app_cibando';
  iconaHome = faHouzz;
  iconaSchedaRicette = faNewspaper;
  iconaMail = faMailBulk;
  iconaRegistered = faRegistered;

  evidenziato = false;
//sfondo = 'background-color: red';
//sfondo = 'red';
  onEvidenziazione(){
    this.evidenziato = !this.evidenziato;
  }
}


