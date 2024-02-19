import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  // variável para a visibilidade dos botões
  btnCadastro:boolean = true;

  //indiceGlobal = 0;

  // JSON de clientes
  clientes:Cliente[]=[];

  // Construtor
  constructor(private servico:ClienteService){}

  // método de seleção
  // selecionar(evento:any):void{
  //   this.indiceGlobal = evento;       
  // }

  // Método de seleção
    selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno);  
    }


  // carregarClientes():void{
  //   this.servico.selecionar()
  //   .subscribe(retorno => this.clientes = retorno);
  // }

  // Método cadastrar
    cadastrar():void{
      this.servico.cadastrar(this.cliente)
      .subscribe(retorno => { 
        
    // Cadastrar o cliente no vetor    
      this.clientes.push(retorno);
    
    // Limpar formulário
        this.cliente = new Cliente();

    // Mensagem
      alert('Cliente cadastrado com sucesso.');    
    });
    }

  // Método de inicialização
  ngOnInit(){
    this.selecionar();
  }

  // Objeto do tipo cliente
  cliente = new Cliente();

  // Método para capturar o input na tela
   capturarInfo(evento:any) {
    console.log(evento);
  }

  // Variável para visibilidade da tabela
    tabela:boolean = true;

  // Método para selecionar um cliente específico  
    selecionarClienteEspecifico(posicao:number):void{

  // Seleção de cliente específico no vetor
    this.cliente = this.clientes[posicao];

  // Visibilidade dos botões
    this.btnCadastro = false;

  // Visibilidade de tabela
    this.tabela = false;    

    }

    //aula 36

    // Método para editar clientes
    editar():void{
      this.servico.editar(this.cliente)
      .subscribe(retorno => {

        // Obter posição do vetor onde está o cliente  
        let posicao = this.clientes.findIndex(obj =>{
          return obj.id == retorno.id;
        });

        // Alterar os dados do cliente no vetor
        this.clientes[posicao] = retorno;

        // Visibilidade dos botões 
        this.btnCadastro = true;

        // Visibilidade da tabela
        this.tabela = true;

        // Mensagem
        alert('Cliente alterado com sucesso.');
      });

    }

  
      
}



