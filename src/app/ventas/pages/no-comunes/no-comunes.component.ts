import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombreMasc: string = "Jonathan";
  genero: string = "masculino";

  clientes: string [] = ['Jonathan', 'Gamaliel', 'Kevin', 'Bryan'];
 
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos # cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'Invitarla'
  }

  persona= {
    nombre: 'Jonathan',
    edad: 23,
    direccion: 'Managua, Nicaragua'
  }

  cambiar(argumentno: string){

    this.nombreMasc = (argumentno == "Jonathan") ?"Ana":"Jonathan";
    this.genero = (this.genero== "femenino") ?"masculino":"femenino";
  }

  Eliminar(){

    if(this.clientes.length === 0){return}

    this.clientes.pop();
  }

  //asyncpipe

  miObservable = interval(1000);


  
  
}
