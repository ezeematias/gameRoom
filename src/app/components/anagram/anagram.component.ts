import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.scss']
})
export class AnagramComponent implements OnInit {

  errorShow: boolean = false;
  errorMessage: string = '';
  messageShow: boolean = false;
  message: string = '';
  constructor() { }

  ngOnInit() {
  }

  palabras=['rojo','boton','plancha','teclado','pantalla','peluche','premio','vaso','madera','guantes'];
  palabraSeleccionada:string = "";
  palabraSeparada : any;
  palabraDesordenada : any;
  juegoNuevo:boolean = false;
  respuesta: string = '';
  ganador: boolean = false;
  perdedor:boolean = false;

  nuevaPalabra(){
    this.juegoNuevo=true;
    this.palabraSeleccionada=this.palabras[Math.floor(Math.random() * (10 - 0))+ 0];
    this.palabraSeparada = this.palabraSeleccionada.split('');
    this.palabraDesordenada = this.palabraSeparada.sort(function() {
      return Math.random() -0.5      
    })
  }

  verificar(){
    if(this.palabraSeleccionada == this.respuesta.toLocaleLowerCase()){
      this.ganador = true;
      this.messageShow = true;
      this.message = "Correcto";
      setTimeout(() => {
        this.messageShow = false;
      }, 4000);
    }else{
      this.perdedor = true;
      this.errorShow = true;
      this.errorMessage = "No has acertado";
      setTimeout(() => {
        this.errorShow = false;
      }, 4000);
    }
    setTimeout(() => {
      this.reset();
    }, 3000);
  }

  reset(){
    this.palabraSeleccionada= "";
    this.juegoNuevo = false;
    this.ganador = false;
    this.perdedor = false;
    this.errorShow = false;
    this.messageShow = false;
    this.respuesta= "";
  }

}
