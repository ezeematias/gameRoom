import { Component, OnInit } from '@angular/core';
import { RankingService } from 'src/app/services/ranking.service';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss']
})
export class CardGameComponent implements OnInit {

  errorShow: boolean = false;
  errorMessage: string = '';

  itemImageUrl: string = "../../../assets/cartas.jpg";
  cartas: Array<number> = new Array();
  right: number = 0;
  bottom: number = 0;
  aciertos: number = 0;
  numeroAnterior: number = 0;
  pointsUser: number = 0;

  constructor(private ranking: RankingService) { }

  ngOnInit(): void {
    var cartaAzar = Math.trunc(Math.random() * 52);
    this.numeroAnterior = cartaAzar % 13;
    this.right = (225 * (cartaAzar % 13));
    this.bottom = (Math.trunc(cartaAzar / 13) * 315);
  }

  getSpriteStyle = function (id: number) {
    var palo = Math.trunc(id / 13);
    console.log('background-position: ' + (225 * (id % 13)) + ' ' + (palo * 315) + 'px;');
    return 'background-position: ' + (225 * (id % 13)) + ' ' + (palo * 315) + 'px;';
  }

  apuestaMayor() {
    this.errorShow = false;
    var cartaAzar = Math.trunc(Math.random() * 52);
    if (this.numeroAnterior <= cartaAzar % 13) {
      this.aciertos++;
      this.pointsUser == 0 ? this.pointsUser = 3 : this.pointsUser *= Math.floor(Math.random() * (3 - 0) + 1);
    }
    else {
      this.aciertos = 0;
      this.errorShow = true;
      this.errorMessage = "No has acertado";
      if (this.pointsUser != 0) {
        this.ranking.addPoint(this.pointsUser, "Mayor o Menor");
      }
      setTimeout(() => {
        this.errorShow = false;
      }, 4000);
    }
    this.numeroAnterior = cartaAzar % 13;
    this.right = (225 * (cartaAzar % 13));
    this.bottom = (Math.trunc(cartaAzar / 13) * 315);
    console.log(this.aciertos);
  }

  apuestaMenor() {
    this.errorShow = false;
    var cartaAzar = Math.trunc(Math.random() * 52);
    if (this.numeroAnterior >= cartaAzar % 13) {
      this.aciertos++;
      this.pointsUser == 0 ? this.pointsUser = 3 : this.pointsUser *= Math.floor(Math.random() * (3 - 0) + 1);
    }
    else {
      this.aciertos = 0;
      this.errorShow = true;
      this.errorMessage = "No has acertado";
      if (this.pointsUser != 0) {
        this.ranking.addPoint(this.pointsUser, "Mayor o Menor");
      }
      setTimeout(() => {
        this.errorShow = false;
      }, 4000);
    }
    this.right = (225 * (cartaAzar % 13));
    this.numeroAnterior = cartaAzar % 13;
    this.bottom = (Math.trunc(cartaAzar / 13) * 315);
    console.log(this.aciertos);

  }

  cartaRandom() {
    this.errorShow = false;
    var carta: HTMLDivElement = document.getElementsByClassName("carta")[0] as HTMLDivElement;
    var cartaAzar = Math.trunc(Math.random() * 52);
    this.right = (225 * (cartaAzar % 13));
    this.bottom = (Math.trunc(cartaAzar / 13) * 315);
    this.numeroAnterior = cartaAzar % 13;
  }

}
