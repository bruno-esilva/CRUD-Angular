import { Component } from '@angular/core';
import { cadastroProduto } from './produtos.module';
import { ProdutosService } from '../servicos/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {



  constructor() { }

  public products:cadastroProduto[] = [];

  //Define as variáveis que serão utilizadas nos métodos abaixo
  nomeProduto: string = ''
  descricaoProduto: string = ''
  valorProduto: number = 0
  exibirFormAdd = false
  idCapturado: number = 0

  ngOnInit(): void {
    //lista os produtos na tabela ao carregar o componente 
    this.products = ProdutosService.list();
  }

  //Médoto de cadastroProduto de produtos
  cadastrarProduto() {
    //Variável para ID, somando 1 ao número já existente
    let idProduto = this.products.length + 1
    let newProduct: cadastroProduto = { //variável para novo produto
      idProduto: idProduto, //Variável de ID
      nomeProduto: this.nomeProduto, //Referencia a variável nomeProduto da linha 17
      descricaoProduto: this.descricaoProduto, //Referencia a variável descrição da linha 18
      valorProduto: this.valorProduto //Referencia a variável valorProduto da linha 19
    } as cadastroProduto //utiliza a tipagem informada em estoque.service.ts
    if (this.validarDados()) { //Condição para validar os dados
      alert('Dados inválidos') //Se verdadeiro, exibe um alerta
    } else {
      ProdutosService.add(newProduct) //Se falso, chama o método add do estoque.services.ts
      this.limparFormulario() //Limpa o formulário para a próxima informação
      this.exibirFormAdd = !this.exibirFormAdd
    }
  }

  //Método para editar os dados (botão editar)
  editarProduto(idProduto: number) {
    //Busca o produto na lista pelo id informado
    const result = ProdutosService.getById(idProduto)
    let newProduct: cadastroProduto = {
      idProduto: result.idProduto,
      nomeProduto: this.nomeProduto,
      descricaoProduto: this.descricaoProduto,
      valorProduto: this.valorProduto
    } as cadastroProduto
    if (this.validarDados()) {
      alert('Dados inválidos')
    } else {
      ProdutosService.edit(newProduct, result)//busca o método de editar em estoque.service.ts, passando o novo produto criado acima, junto do resultado encontrado pela constante result no começo do bloco
      this.limparFormulario()
      this.exibirFormAdd = !this.exibirFormAdd
    }
  }

  //Método para excluir os dados (botão excluir)
  excluirProduto(idProduto: number) {
    ProdutosService.delete(idProduto)
  }

  //Método para limpar formulário      
  limparFormulario() {
    this.nomeProduto = ''
    this.descricaoProduto = ''
    this.valorProduto = 0
    this.idCapturado = 0
  }

  //Método para validar se todos os campos foram preenchidos
  validarDados() {
    return this.nomeProduto == '' || this.descricaoProduto == '' || this.valorProduto == 0
  }

  changeFormAddProduto(idProduto: number) { //Função para mostrar ou não o form add
    this.exibirFormAdd = !this.exibirFormAdd // altera a variável de exibição do form usada no ngIf
    this.idCapturado = idProduto // Define a variável idCapturado para o ID trazido ao clicar no botão
    if (idProduto != 0) { // Condicional de validação para se o ID for diferente de 0, entrar no modo de edição
      let produto = ProdutosService.getById(idProduto) // variável Produto recebe a linha do array do produto
      //Para exibir os dados na tela
      this.nomeProduto = produto.nomeProduto //Carrega a variável nomeProduto do ngModel com o campo nomeProduto da linha trazida do array
      this.descricaoProduto = produto.descricaoProduto //Carrega a variável descricaoProduto do ngModel com o campo descricaoProduto da linha trazida do array
      this.valorProduto = produto.valorProduto //Carrega a variável valor do ngModel com o campo valor da linha trazida do array
    }
  }


}
