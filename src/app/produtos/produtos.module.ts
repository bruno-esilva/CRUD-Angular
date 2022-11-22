import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProdutosModule { }

export interface cadastroProduto {
  idProduto: number
  nomeProduto: string
  descricaoProduto: string
  valorProduto: number
}
