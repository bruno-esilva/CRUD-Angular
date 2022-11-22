import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ClientesModule { }

export interface cadastroCliente {
  idCliente: number
  nomeCliente: string
  sobrenomeCliente: string
}
