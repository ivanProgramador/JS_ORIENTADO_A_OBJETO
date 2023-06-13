/*
 A real diferença entre classes e objetos é que uma classe é um molde usado como base para criar objetos,
 usendo como exemplo um carro.Um carro as caracteristicas da classe carro seriam os atributos que um carrao precisa
 ter para ser considerado um carro exemplo:
 
 4 rodas,porta malas,capo, marca -> estas são as caracteristicas genericas  de um carro
 
 agora o carro objeto 

 4 rodas aro 16 , porta malas 60 litros , capo de fibra de carbono, marca mitsubish , modelo lancer -> nesse caso eu estou falando de um carro especifico 

 Uma classe contem atributos genericos para definir qual eo objeto que pertence a ela como base nos atributos e metodos.
 agora uma demonstração  real.

 carro sendo uma classe:

 
*/

class Carro{

    /*Eu não sei qual eo carro extamente , mas se ele for um carro para fazer parte dessa classe 
      ele precisa ter estes atributos
    */

     constructor(){

        this.quatroRodas = true;
        this.CapcidadeportaMalas = '';
        this.tipoCapo ='';
        this.marca = '';

     }

     /*Os metodos são comportamentos que um objeto dessa classe 
       tambem possui 
     */

     AbrirPorta(){
        console.log('Porta aberta')
     }
     FecharPorta(){
        console.log('Porta aberta')
     }
     Acelerar(){
        console.log('Acelerando')
         
     }
     Freiar(){
        console.log('freiando')
     }


}

/*
    Carro objeto

    Aqui eu estou apontando para uma carro cujo eu ja sei todas as caracteristicas 
    então esse carro é um objeto que pertence a classe carro 
*/

const Carro = {

    numeroDeRodas: 4,
    tamanhoAro : 16,
    marca: 'Mitsubish',
    portaMalas: '160 litros',
    tipoCapo: 'Fibra de carbono'

}