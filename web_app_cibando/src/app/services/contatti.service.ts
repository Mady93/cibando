import { ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {

  contattiAzienda = new ReplaySubject();
  constructor() { }
}
