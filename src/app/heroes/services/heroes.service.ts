import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(this.baseUrl + '/heroes');
  }

  getHeroesById(heroe: string): Observable<Heroe>{
    return this.http.get<Heroe>(`${ this.baseUrl }/heroes/${heroe}`);
  }

  getSuggestions(termino: string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes?q=${termino}&_limit=6`);
  }

}
