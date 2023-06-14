
class Dado{
    constructor(faces){

         this.faces = faces;
    }

    jogarDado(){


        
        console.log('Resultado : ' + this.getRandomIntInclusive(1, this.faces));

    }

    

    getRandomIntInclusive(min,max){

        min = Math.ceil(min);
        max = Math.floor(max);

        //a formula baixo evita que ele retorne 0

        return Math.floor(Math.random() * (max - min + 1)) + min;



    }
}

var dado1 = new Dado(6);
var dado2 = new Dado(60);

dado1.jogarDado();
dado2.jogarDado();

