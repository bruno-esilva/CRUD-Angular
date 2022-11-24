import { Injectable } from '@angular/core';
import { cadastroProduto } from '../produtos/produtos.module';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

   //Array com a lista dos produtos
   private static listOfProducts:cadastroProduto[] = [
    {idProduto: 1, nomeProduto: 'Banana', descricaoProduto: 'Banana nanica', valorProduto: 5},
    {idProduto: 2, nomeProduto: 'Maçã', descricaoProduto: 'Maçã Verde', valorProduto: 9},
    {idProduto: 3, nomeProduto: 'Manga', descricaoProduto: 'Manga Tommy', valorProduto: 7},
    {idProduto: 4, nomeProduto: 'Laranja', descricaoProduto: 'Laranja Lima', valorProduto: 3}
   ]
  
   //Método para listar os produtos no array listOfProducts
   public static list():cadastroProduto[] {
     return this.listOfProducts
   }
 
   //Método para adicionar produtos ao array
   public static add(product:cadastroProduto):void {
     this.listOfProducts.push(product)
   }
 
   //Método para editar produtos do array
   public static edit(newProduct:cadastroProduto, oldProduct:cadastroProduto):void {
     this.listOfProducts[this.getIndexByProduct(oldProduct)] = newProduct
   }
 
   //Método para deletar produtos do array
   public static delete(idProduto:number):void {
      //Busca o produto na lista pelo id informado
      const result = this.getById(idProduto)   
      //Substitui o produto encontrado
      this.listOfProducts.splice(this.getIndexByProduct(result), 1) //Splice substitui os itens do array encontrados. (Valor encontrado, quantidade de itens para editar)
   }
   
   //Método para pegar o ID de um item do array
   public static getById(idProduto:number) {
      //Busca o produto na lista pelo id informado
      return this.listOfProducts.filter(product => product.idProduto == idProduto)[0] //retorna o produto daquela linha do array
   }
 
   //Método para pegar o produto do ID conseguido em getByID
   public static getIndexByProduct(product:cadastroProduto){
     //Busca o index do produto localizado na variável seguinte
     return this.listOfProducts.indexOf(product)
   }
 
}
