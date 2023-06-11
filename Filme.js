
/* ABSTRAÇÃO 
 
A abstração se trata de pegar os tributos que interessam para um determinado conceito 
a classe abaixo representa um filme no contexto de armazenamento de uma empresa de estreaming,
a abstração trata-se da visão que temos de um objeto pelo contexto, digamos usandoa o filme como exemplo
1 - FILME -> para o telespectdor interessa (quais atores vão estar no filme, a historia que o filme conta)
2 - O FILME PARA UMA PRODUTORA -> para uma pordutora interessa (custo da filmagem, custo de contrato de atores, tempo de produção, lucro esperado)

ou seja cada um abstrai do iobjeto filme oque lhe interessa, do mesmo jeito é um software com uma classe, por exemplo para uma locadora,
não interssa saber o custo de produção do filme então colocar esse campo em um software de locadora seria desnecessario, mas colocar o valor do aluguel
do filme isso interessa para a locadora, então isso e abstração basicamente e so pegar os atributos convenientes a necessidade do cliente.

*/ 


class Filme{
     /* criando os atributos que interessam na classe filme isso é feito de um construtor*/
     constructor(){

        this.titulo  = '';
        this.ano     = 0;
        this.genero  = '';
        this.diretor = '';
        this.atores  = [];
        this.duracao  = 0;

     }

     /* Metodos da classe filme */

        Reproduzir(){
            console.log('Reproduzindo ...');
        }

        Pausar(){
            console.log('Pausado || ');
        }

        Avancar(){
            console.log('Avançando >>');
        }

        Fechar(){
            console.log('Fechado X ');
        }




}