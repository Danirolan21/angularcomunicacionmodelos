import { Component } from '@angular/core';

@Component({
  selector: 'app-padredeportes',
  templateUrl: './padredeportes.component.html',
  styleUrl: './padredeportes.component.css'
})
export class PadredeportesComponent {
  public deportes: Array<string>;
  public mensaje!: string;

  constructor() {
    this.deportes = ["Petanca", "Curling", "Canicas", "Padel", "Atletismo"]
  }
  //TENDREMOS UN METODO PARA PODER SELECCIONAR UN FAVORITO
  //Y DIBUJARLO
  seleccionarFavoritoPadre(event: any): void {
    this.mensaje = "Deporte favorito: " + event;
    console.log("Dato: " + event);
  }
}
