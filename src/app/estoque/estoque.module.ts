import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EstoqueModule { }

export interface cadastro {
  id: number
  nome: string
  descricao: string
  valor: number
}
