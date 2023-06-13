/*
  O contructor é um função resposnsavel por criar o objeto na memoria 
  atraves dos atributos da classe 
*/

class Filme {

    /*
      DIFERENÇA ENTRE PARAMETRO E ATRIBUTO
      
      no construtor eu tenho o atributo titulo para ser preenchido 
      eu sei que ele é um atributo porque dentro do construtor ele tem o

      this.titulo -> atributo 

      titulo -> sem o this é um parametro que o contrutor recebe quando um objeto é criado 
      se alguem cria uma objeto da classe filme ele tem que ter um titulo então ele vai ser definido no objeto 
      no caso abaixo eu estou recebendo o titulko como parametro e colocando o valor dele dentro o atributo titulo 
      
    */
    constructor(titulo,ano,genero,diretor,duracao,atores){

        this.titulo  = titulo;
        this.ano     = ano;
        this.genero  = genero;
        this.diretor =diretor;
        this.duracao = duracao;
        this.atores  = [];

    }

        Reproduzir(){
            console.log('Reproduzindo ...');
        }
        Pausar(){
            console.log('Pausado || ');
        }
        Avancar(){
            console.log('Avancar >> ');
        }
        Fechar(){
            console.log('Feachado X')
        }



}

// Criando um objeto usando a classe filme
 

var vingadores = new Filme('Vingadores guerra infinita','2014','Ação','alguem','2H30');
var fantasma = new Filme('O fantasma','1996','Ação','2H30');

//mostrando os objeto criados com bsase na classe filme isso e possivel porque o construtor 
//esta esperando esses valores  

console.log(vingadores);
console.log(fantasma);

