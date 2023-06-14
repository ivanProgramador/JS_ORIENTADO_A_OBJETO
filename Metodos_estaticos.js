/*
 Para usar um metodo de uma classe e necessario antes criar um objeto baseado nessa classe,
 porem existem situações onde isso não vai ser algo usual, vão ter momentos onde vai ser necessario,
 usar um metodo porem sem declarar um objeto para usar ele é ai que entram os metodos estaticos 
 Abaixo eu tenho a classe calculadora que tem 3 metodos em um contexto  normal eu teria que declarar um 
 novo objeto calculadora pra então usar os metodos dela, mas no caso colocando a palavra static na frente dos metodos,
 eu consigo usar eles sem precisar dessa declaração   
  */

 class Calculadora {

    static somar(a,b){
        console.log(a + b);

     }

    static dividir(a,b){
        console.log(a / b);
     }

    static subtrair(a,b){
        console.log(a-b);
     }
 }


 /*Usando os metodos da classe sem precisar declarar um, objeto */
 
 Calculadora.somar(2,3);
 Calculadora.dividir(5,2);
 Calculadora.subtrair(100,50);