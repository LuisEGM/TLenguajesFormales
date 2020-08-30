export default class Persona {

    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    static corre(){
        console.log("Estoy corriendo...!");
    }

    presentate_a(dest){
        console.log(`Hola soy ${this.nombre}, tengo ${this.edad} años, mucho gusto ${dest}`);
    }

}