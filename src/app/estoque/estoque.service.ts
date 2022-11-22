import { Injectable } from '@angular/core';
import { cadastro } from "./estoque.module"

@Injectable({
  providedIn: 'root'
})

export class EstoqueService {

  constructor() { }
  
  //Array com a lista dos produtos
  private static listOfProducts:cadastro[] = []
  
  //Método para listar os produtos no array listOfProducts
  public static list():cadastro[] {
    return this.listOfProducts
  }

  //Método para adicionar produtos ao array
  public static add(product:cadastro):void {
    this.listOfProducts.push(product)
  }

  //Método para editar produtos do array
  public static edit(newProduct:cadastro, oldProduct:cadastro):void {
    this.listOfProducts[this.getIndexByProduct(oldProduct)] = newProduct
  }

  //Método para deletar produtos do array
  public static delete(id:number):void {
     //Busca o produto na lista pelo id informado
     const result = this.getById(id)   
     //Substitui o produto encontrado
     this.listOfProducts.splice(this.getIndexByProduct(result), 1) //Splice substitui os itens do array encontrados. (Valor encontrado, quantidade de itens para editar)
  }
  
  //Método para pegar o ID de um item do array
  public static getById(id:number) {
     //Busca o produto na lista pelo id informado
     return this.listOfProducts.filter(product => product.id == id)[0] //retorna o produto daquela linha do array
  }

  //Método para pegar o produto do ID conseguido em getByID
  public static getIndexByProduct(product:cadastro){
    //Busca o index do produto localizado na variável seguinte
    return this.listOfProducts.indexOf(product)
  }

}

  
