import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor() { }

  itensPedido() {
    return [
      {idItem: 1, nomeItem: 'Banana', valorItem: 5, qtdItem: 1, valorQtd: 5},
      {idItem: 2, nomeItem: 'Maçã', valorItem: 9, qtdItem: 3, valorQtd: 27}
    ]
  }

}
