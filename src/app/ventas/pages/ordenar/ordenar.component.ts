import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  heroe: Heroe[] = [
    {
      nombre: 'superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'linterna verde',
      vuela: true,
      color: Color.verde
    }

  ]



}
