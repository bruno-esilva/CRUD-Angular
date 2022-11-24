import { Component } from '@angular/core';
import { cadastrarPedido, itensDoPedido } from './pedidos.module';
import { PedidosService } from '../servicos/pedidos.service';
import { ClientesService } from '../servicos/clientes.service';
import { ProdutosService } from '../servicos/produtos.service';
import { ClientesComponent } from '../clientes/clientes.component';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {

  constructor(public pedidosService: PedidosService) { 
    
  }

  ngOnInit(): void {
      console.log(this.pedidos)
      console.log(this.itensDoPedido)
      console.log(this.itens)
      }

  itens = this.pedidosService.itensPedido;
  idPedido = 0
  idClientePedido = 0
  valorTotalPedido = 0
  totalItens = 10
  formCadastroPedido = true
  
  public itensDoPedido:itensDoPedido[] = [
    {idItem: 1, nomeItem: 'Banana', valorItem: 5, qtdItem: 1, valorQtd: 5},
    {idItem: 2, nomeItem: 'Maçã', valorItem: 9, qtdItem: 3, valorQtd: 27}
  ];

  

  public pedidos:any[] = [
    { idPedido: 1, idClientePedido: 1, nomeClientePedido: 'José Silva', itensPedido: this.itens(), valorTotalPedido: 32, dataPedido: '22/11/2022' }
  ];  

  
  

  cadastrarPedido() {
    this.formCadastroPedido = !this.formCadastroPedido
  }

  calcValorQtd(){
  }

  public static calcValorTotalPedido() {
  }

  public static calcQtdItensPedido() {
    
  }

  public static buscarCliente(){

  }

}
