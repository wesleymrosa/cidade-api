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

}
