import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijodeporte',
  templateUrl: './hijodeporte.component.html',
  styleUrl: './hijodeporte.component.css'
})
export class HijodeporteComponent {
  @Input() sport!: string;

  @Output() seleccionarFavoritoPadre: EventEmitter<any> =
  new EventEmitter();

  seleccionarFavoritoHijo(): void {
    //REALIZAMOS LA LLAMADA AL METODO PARENT
    this.seleccionarFavoritoPadre.emit( this.sport );
  }
}
