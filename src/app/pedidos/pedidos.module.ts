import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PedidosModule { }

export interface cadastroPedido {
  id: number
  valorPedido: number
}
