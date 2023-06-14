

/*
  O acesso direto a um atributo funcciona mas não é uma boa prática 
  no exeplo abaixo eu vou usar um metodo pra fazer isso como visto antes 
  pra mostrar um objeto na tela:
  
  // instancio um objeto e preencho os dados 

  var fantasma = new Filme('O fantasma','1996','alguem','2h30');

  //depois eu mostro no conseole 

  console.log(fantasma);

  Mas existe uma maneira de fazer isso usando os metodos da propria classe Filme

  é ai que entra o this a tradução da palavre this significa este isso signiofica que ele aponta para um 
  objeto especifico na hora que a função e chamada podem existir varios filmes 
  mas este neste momento tem 
  
  this.titulo  
  this.ano
  this.genero 

  dependendo do atributos que estiverem no objeto que vai chamar ele 


  

*/



class Filme {

  
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
            console.log('Feachado X');
        }

        /* Esse metodo vai mostrar os atributos do objeto que chamar ele */

        Ficha(){
            console.log('-------------Ficha filme-------------------')
            console.log('Titulo do filme: ' + this.titulo);
            console.log('Ano: ' + this.ano);
            console.log('Duração: ' + this.duracao);
            console.log('--------------------------------------------')
            //chamando um metodo dentro de outro
            this.Reproduzir();
        }



}

var fantasma = new Filme('O fantasma','1996','Ação','alguem','2:30');
var avatar = new Filme('Avatar','2009','Ação','Alguem','2:10');
//aqui ao inves de sddar console.log na variavel eu chamo o metodo ficha 

fantasma.Ficha();

//Usando avatar pra chamar o metodo ficha

avatar.Ficha();

//ao inves fazer o processo varias vezes eu coloco dentro de um metodo 
//e ele faz de forma automatica

