import { Injectable } from '@angular/core';
import { cadastroCliente } from '../clientes/clientes.module';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  constructor() { }

  //Array com a lista dos clientes
  private static listOfClients:cadastroCliente[] = []
  
  //Método para listar os produtos no array listOfProducts
  public static list():cadastroCliente[] {
    return this.listOfClients
  }

   //Método para adicionar produtos ao array
   public static add(client:cadastroCliente):void {
    this.listOfClients.push(client)
  }

  //Método para editar produtos do array
  public static edit(newClient:cadastroCliente, oldClient:cadastroCliente):void {
    this.listOfClients[this.getIndexByClient(oldClient)] = newClient
  }

  //Método para deletar produtos do array
  public static delete(idCliente:number):void {
    //Busca o produto na lista pelo id informado
    const result = this.getById(idCliente)   
    //Substitui o produto encontrado
    this.listOfClients.splice(this.getIndexByClient(result), 1) //Splice substitui os itens do array encontrados. (Valor encontrado, quantidade de itens para editar)
 }
 
 //Método para pegar o ID de um item do array
 public static getById(idCliente:number) {
    //Busca o produto na lista pelo id informado
    return this.listOfClients.filter(client => client.idCliente == idCliente)[0]
 }

 //Método para pegar o produto do ID conseguido em getByID
 public static getIndexByClient(client:cadastroCliente){
   //Busca o index do produto localizado na variável seguinte
   return this.listOfClients.indexOf(client)
 }

}
