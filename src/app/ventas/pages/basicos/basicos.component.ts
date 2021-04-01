import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'jonathan';
  nombreUpper: string = 'JONATHAN';
  nombreCompleto: string = 'JoNathan aCuNa';

  fecha: Date = new Date();


}
