/*
 A reutilização de codigo é uma pratica que enconoimiza tempo e evitar retrabalho,
 essa técnica pode ser usada atraves da composição é um metodo mais eficinte que herança 
 ,que consiste em usar uma classe dentro da outra como se as classes menores fossem metodos.

 o nome correto seria Componentes 
 Abaixo eu vou usar um mani pulador de arquivos pra mostrar como funciona  

*/

// neste bloco eu crio as classes que tem um metoido cada uma

class Escritor{
    Escrever(arquivo,conteudo){
       console.log('Conteudo escrito');
    }
}

class Leitor{
    Ler(arquivo){
       console.log('Lendo arquivo');
    }
}


class Criador{
    Criar(nome){
       console.log('Arquivo criado');
    }
}

class Destrutor{
    Escrever(nome){
       console.log('Deletando arquivo');
    }
}


//apartir daqui eu crio a classe manipulador

class ManipuladorDeArquivos{
    constructor(nome){

        this.nome = nome;
        //criando um objeto baseado na classe externa
        this.Leitor = new Leitor();
        this.Escritor = new Escritor();
        this.Criador = new Criador();
        this.Destrutor = new Destrutor();
        
    }
}

var manipulador = new ManipuladorDeArquivos();

//usando os metodos nesse caso as classes se tornam componentes do manipulador de arquivos  

manipulador.Leitor.Criador();
manipulador.Leitor.Ler();
manipulador.Leitor.Escrever();
manipulador.Leitor.Destrutor();


//agora uma das maiores vantagens em usar a composição é usar os mesmos metodos pra compor outra classe 
// a vanatagem é que se eu precisar alterar qualquer coisa eu so preciso mexer no metodo do componente,
//e todoas as classes que usam ele serão atualizadas tambem
class GerenciadorDeUsuarios{

     constructor(){
         this.criador = new Criador();
         this.escrever = new Escritor();
     }

     SalvarListaDeUsuarios(lista){
        this.criador.Criar('usuarios.txt');
        this.escrever.Escrever('usuarios.txt',lista);
     } 
}

var usuarios = new GerenciadorDeUsuarios();

usuarios.SalvarListaDeUsuarios(['joao','maria']);





