import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private url: string = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http:HttpClient) { }

  getPokemon(name : string) {
    return this.http.get(this.url + name);
  }
}
