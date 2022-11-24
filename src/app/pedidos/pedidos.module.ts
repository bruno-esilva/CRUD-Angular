import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PedidosService } from '../servicos/pedidos.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PedidosService
  ]
})
export class PedidosModule { }

export interface cadastrarPedido {
  idPedido: number
  idClientePedido: number
  nomeClientePedido: string
  itensDoPedido: itensDoPedido
  valorTotalPedido: number
  dataPedido: string
}

/* export interface cadastroPedido {
  idPedido: number
  idClientePedido: number
  nomeClientePedido: string
  idProdutoPedido: number
  nomeProdutoPedido: string
  qtdProduto: number
  valorUnitario: number
  valorSomaProdutos: number
  valorTotalPedido: number
  totalItens: number
  dataPedido: string
} */

export interface itensDoPedido {
  idItem: number
  nomeItem: string
  valorItem: number
  qtdItem: number
  valorQtd: number
}

