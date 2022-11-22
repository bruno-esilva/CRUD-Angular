import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PedidosModule { }

export interface cadastroPedido {
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
}