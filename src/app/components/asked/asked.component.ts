import { Component, OnInit } from '@angular/core';
import { start } from 'repl';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-asked',
  templateUrl: './asked.component.html',
  styleUrls: ['./asked.component.scss']
})
export class AskedComponent implements OnInit {
  errorShow: boolean = false;
  errorMessage: string = '';
  messageShow: boolean = false;
  message: string = '';

  urlImage: string = "";
  response1: string = "";
  response2: string = "";
  response3: string = "";
  pokemon: string[] = ["pikachu", "dragonite", "squirtle", "charmander", "bulbasaur", "mewtwo", "mew", "ditto", "eevee", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran-f", "nidorina", "nidoqueen", "nidoran-m", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr-mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto"];
  selectedPokemon: string = "";

  constructor(private pokemonService: ApiService) { }

  ngOnInit(): void {
    this.start();
  }

  start() {
    let index = this.question();
    this.configButton(index);
  }

  question() {
    let random = Math.floor(Math.random() * this.pokemon.length);
    this.selectedPokemon = this.pokemon[random];
    this.searchPokemon(this.selectedPokemon);
    console.log(this.selectedPokemon);
    return random;
  }

  configButton(index: number) {
    let random = Math.floor(Math.random() * this.pokemon.length);
    this.response1 = this.pokemon[random];
    this.response2 = this.pokemon[index];
    random = Math.floor(Math.random() * this.pokemon.length);
    this.response3 = this.pokemon[random];
  }

  selection(response: number) {
    this.errorShow = false;
    this.messageShow = false;

    switch (response) {
      case 1:
        if (this.response1 !== this.selectedPokemon) {
          this.errorShow = true;
          this.errorMessage = "No has acertado";
          setTimeout(() => {
            this.errorShow = false;
          }, 4000);
        } else {
          this.messageShow = true;
          this.message = "Correcto";
          setTimeout(() => {
            this.messageShow = false;
          }, 4000);
        }
        break;
      case 2:
        if (this.response2 !== this.selectedPokemon) {
          this.errorShow = true;
          this.errorMessage = "No has acertado";
          setTimeout(() => {
            this.errorShow = false;
          }, 4000);
        } else {
          this.messageShow = true;
          this.message = "Correcto";
          setTimeout(() => {
            this.messageShow = false;
          }, 4000);
        }

        break;
      case 3:
        if (this.response3 !== this.selectedPokemon) {
          this.errorShow = true;
          this.errorMessage = "No has acertado";
          setTimeout(() => {
            this.errorShow = false;
          }, 4000);
        } else {
          this.messageShow = true;
          this.message = "Correcto";
          setTimeout(() => {
            this.messageShow = false;
          }, 4000);
        }
        break;
    }
    this.start();
  }

  searchPokemon(name: string) {
    this.pokemonService.getPokemon(name).subscribe((data: any) => {
      this.urlImage = data.sprites.front_default;
    });
  }
}
