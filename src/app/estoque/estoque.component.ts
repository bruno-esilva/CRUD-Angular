import { Component } from '@angular/core';
import { cadastro } from 'src/app/estoque/estoque.module';
import { EstoqueService } from 'src/app/estoque/estoque.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent {

  constructor() {}

  public products:cadastro[] = []; 
  
  //Define as variáveis que serão utilizadas nos métodos abaixo
   nome:string = ''
   descricao:string = ''
   valor:number = 0
   exibirFormAdd = false
   idCapturado:number = 0
  
  ngOnInit(): void {
   //lista os produtos na tabela ao carregar o componente 
   this.products = EstoqueService.list();
    }
  
    //Médoto de cadastro de produtos
  cadastrarDados(){
    //Variável para ID, somando 1 ao número já existente
    let id = this.products.length + 1
    let newProduct: cadastro = { //variável para novo produto
      id: id, //Variável de ID
      nome: this.nome, //Referencia a variável nome da linha 17
      descricao: this.descricao, //Referencia a variável descrição da linha 18
      valor: this.valor //Referencia a variável valor da linha 19
    } as cadastro //utiliza a tipagem informada em estoque.service.ts
    if (this.validarDados()) { //Condição para validar os dados
      alert('Dados inválidos') //Se verdadeiro, exibe um alerta
    } else {
    EstoqueService.add(newProduct) //Se falso, chama o método add do estoque.services.ts
    this.limparFormulario() //Limpa o formulário para a próxima informação
    this.exibirFormAdd = !this.exibirFormAdd
    }  
  }
  
  //Método para editar os dados (botão editar)
  editarDados(id:number){
    
    //Busca o produto na lista pelo id informado
    const result = EstoqueService.getById(id)
    let newProduct: cadastro = { 
      id: result.id,
      nome: this.nome,
      descricao: this.descricao,
      valor: this.valor
    } as cadastro
    if (this.validarDados()) {
      alert('Dados inválidos')
    } else {
    EstoqueService.edit(newProduct, result)//busca o método de editar em estoque.service.ts, passando o novo produto criado acima, junto do resultado encontrado pela constante result no começo do bloco
    this.limparFormulario()
    this.exibirFormAdd = !this.exibirFormAdd
    }  
  }
  
  //Método para excluir os dados (botão excluir)
  excluirDados(id:number){
       EstoqueService.delete(id) 
      }  
    
  //Método para limpar formulário      
  limparFormulario() {
    this.nome = ''
    this.descricao = ''
    this.valor = 0
    this.idCapturado = 0
  }  

  //Método para validar se todos os campos foram preenchidos
  validarDados() {
    return this.nome == '' || this.descricao == '' || this.valor == 0 
  }

  changeFormAdd(id:number) { //Função para mostrar ou não o form add
    this.exibirFormAdd = !this.exibirFormAdd // altera a variável de exibição do form usada no ngIf
    this.idCapturado = id // Define a variável idCapturado para o ID trazido ao clicar no botão
    if (id != 0) { // Condicional de validação para se o ID for diferente de 0, entrar no modo de edição
      let produto = EstoqueService.getById(id) // variável Produto recebe a linha do array do produto
      //Para exibir os dados na tela
      this.nome = produto.nome //Carrega a variável nome do ngModel com o campo nome da linha trazida do array
      this.descricao = produto.descricao //Carrega a variável descricao do ngModel com o campo descricao da linha trazida do array
      this.valor = produto.valor //Carrega a variável valor do ngModel com o campo valor da linha trazida do array
    }
  }
  

  }
  
