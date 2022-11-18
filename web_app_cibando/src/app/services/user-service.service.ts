import { Injectable } from '@angular/core';
import { Subject, ReplaySubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

                               //Serve per il cookie di registrazione sulla home

// datiUtente = new Subject();
 datiUtente = new ReplaySubject();
  constructor() { }
}
