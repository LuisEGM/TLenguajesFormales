import Persona from './modulo1';

export default class Estudiante extends Persona {

    constructor(nombre,edad,codigo){
        super(nombre,edad)
        this.codigo = codigo
    }

    identificate(){
        console.log(`Mi name is ${this.nombre}, have ${this.edad} age and my code is ${this.codigo}`);
    }

}