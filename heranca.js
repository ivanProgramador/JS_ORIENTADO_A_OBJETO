/*
 Herança é um cconceito  de orientação a objetos que lembra a composição porem 
 existem diferenças sutis de sintaxe, para que uma classe possa herdar metodos e atributos de outra
 usamos a palavra resevada extends como o exemplo abaixo    
*/

// a classe animal contem atributos base de qualquer animal dentro do petshop
// todo animal tem nome,peso,idade 

class Animal{

     constructor(nome,peso,idade){

        this.nome = nome;
        this.peso = peso;
        this.idade = idade;

     }

}

// na classe abaixo eu crio a classe cachoro que é um animal 
// que tem nome,peso e idade tambem mas eu não preciso escrever tudo denovo 
//ao ineves disse eu faço somente um extenção 
//quando eu faço esse extensão cachorro passa a ater todos os atributos da classe animal 
//e seu metodo exclusivo que é latir 
// a aclasse animal pode conter varios metodos e atributos genericos enquanto a classe cachorro se preocupa 
//somente com os metodos especificos de um animal dessa classe 

class Cachorro extends Animal {

    
    latir(){
        console.log('Au au .... ')
    }

    

    ficha(){
        console.log('Nome : ' + this.nome);
        console.log('Peso: '  + this.peso);
        console.log('Idade: ' + this.idade);
        this.latir();
    }
}


var toto = new Cachorro('Toto','2 kilos','1 ano');

toto.ficha();
