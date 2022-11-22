import { Component } from '@angular/core';
import { cadastroPedido } from './pedidos.module';
import { PedidosService } from '../servicos/pedidos.service';
import { ClientesService } from '../servicos/clientes.service';
import { ProdutosService } from '../servicos/produtos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {

  constructor() { }

  idPedido = 0
  idClientePedido = 0
  valorTotalPedido = 0
  totalItens = 10
  formCadastroPedido = true

  public pedidos: cadastroPedido[] = [
    {idPedido: 1, idClientePedido: 1, nomeClientePedido: 'José Silva', idProdutoPedido: 1, nomeProdutoPedido: 'Banana', qtdProduto: 1, valorUnitario: 5, valorSomaProdutos: 5, valorTotalPedido: 5, totalItens: 1, dataPedido: '22/11/2022'},
    {idPedido: 2, idClientePedido: 2, nomeClientePedido: 'João Santos', idProdutoPedido: 2, nomeProdutoPedido: 'Maçã', qtdProduto: 2, valorUnitario: 10, valorSomaProdutos: 20, valorTotalPedido: 20, totalItens: 2, dataPedido: '22/11/2022'}
  ];

  public static calcValorTotalPedido() {
  }

  public static calcQtdItensPedido() {


  }



}
