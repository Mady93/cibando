import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  apiBaseUrl="api/users";
                               //Serve per il cookie di registrazione sulla home

// datiUtente = new Subject();
 datiUtente = new ReplaySubject();
  constructor(private http:HttpClient) { }

  nuovoUtente(dati:any):Observable<any>{
    return this.http.post<any>(`${this.apiBaseUrl}/signup`, dati);
  }

}
