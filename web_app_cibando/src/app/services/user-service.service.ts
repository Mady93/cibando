import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
datiUtente = new Subject();

  constructor() { }
}
