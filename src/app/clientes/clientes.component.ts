import { Component } from '@angular/core';
import { cadastroCliente } from '../clientes/clientes.module';
import { ClientesService } from 'src/app/servicos/clientes.service'


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  constructor() { }

  public clients: cadastroCliente[] = [];

  //Define as variáveis que serão utilizadas nos métodos abaixo
  idCliente: number = 0
  nomeCliente: string = ''
  exibirFormAdd = false
  idCapturado: number = 0

  ngOnInit(): void {
    //lista os produtos na tabela ao carregar o componente 
    this.clients = ClientesService.list();
  }

  //Médoto de cadastro de produtos
  cadastrarCliente() {
    //Variável para ID, somando 1 ao número já existente
    let idCliente = this.clients.length + 1
    let newClient: cadastroCliente = { //variável para novo produto
      idCliente: idCliente, //Variável de ID
      nomeCliente: this.nomeCliente //Referencia a variável nome da linha 17
    } as cadastroCliente //utiliza a tipagem informada em estoque.service.ts

    ClientesService.add(newClient) //Se falso, chama o método add do estoque.services.ts
    console.log(this.clients)
    this.limparFormulario() //Limpa o formulário para a próxima informação
    this.exibirFormAdd = !this.exibirFormAdd
  }

  //Método para editar os dados (botão editar)
  editarCliente(idCliente: number) {
    //Busca o produto na lista pelo id informado
    const result = ClientesService.getById(idCliente)
    let newClient: cadastroCliente = {
      idCliente: result.idCliente,
      nomeCliente: this.nomeCliente
    }
    ClientesService.edit(newClient, result)//busca o método de editar em estoque.service.ts, passando o novo produto criado acima, junto do resultado encontrado pela constante result no começo do bloco
    this.limparFormulario()
    this.exibirFormAdd = !this.exibirFormAdd
  }

  //Método para excluir os dados (botão excluir)
  excluirCliente(idCliente: number) {
    ClientesService.delete(idCliente)
  }

  //Método para limpar formulário      
  limparFormulario() {
    this.nomeCliente = ''
  }

  changeFormAddCliente(idCliente: number) { //Função para mostrar ou não o form add
    this.exibirFormAdd = !this.exibirFormAdd // altera a variável de exibição do form usada no ngIf
    this.idCapturado = idCliente // Define a variável idCapturado para o ID trazido ao clicar no botão
    if (idCliente != 0) { // Condicional de validação para se o ID for diferente de 0, entrar no modo de edição
      let cliente = ClientesService.getById(idCliente) // variável Produto recebe a linha do array do produto
      //Para exibir os dados na tela
      this.nomeCliente = cliente.nomeCliente //Carrega a variável nome do ngModel com o campo nome da linha trazida do array
    }
  }
}
