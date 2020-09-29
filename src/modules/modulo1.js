//Transforma la propiedad alfabeto del objeto lenguaje.
export const vectorizarAlfabeto = (alfabeto) => {
    const vectorAlfabeto = alfabeto.split(" ");
    //arregla el bug del espacio en blanco agregado al vector
    return vectorAlfabeto.filter( e => e !== '');
}

//Recibe la propiedad alfabeto(string) la transforma
export const formatearAlfabeto = (alfabeto) => {
    
    const alfaVec = vectorizarAlfabeto(alfabeto);
    //console.log(alfaVec);
    return alfaVec;
}

export const imprimirAlfabetoFormateado = (alfabeto) => {
    
    if(alfabeto.length !== 0){
        let stringAlf = '{ ';
        alfabeto.forEach((e,i) => {
            //cuando llegue al final que no escriba , si no que cierre la llave
            if(alfabeto.length-1 === i){
                stringAlf = stringAlf + e + ' }';
            }
            else{
                stringAlf = stringAlf + e + ', ';
            }
        })
        return stringAlf;
    }
}

export const cardinalidadDeUnLenguaje = (alfabeto) => {
    const cardinalidad = alfabeto.length;
    return cardinalidad;
}

export const cardinalidadDePalabra = (palabra) => (
    palabra.length
)

export const invertirPalabra = (palabra) => { // recibir una palabra
    var x = palabra.length;
    var palabraInvertida = "";
  
    while (x>=0) {
      palabraInvertida = palabraInvertida + palabra.charAt(x);
      x--;
    }
    return palabraInvertida;
}

export const invertirLenguaje = (lenguaje) => {// recibir un lenguaje
    var x = lenguaje.length;
    var lenguajeInvertido = [];
    console.log(x);
    console.log(lenguaje);
    //estaba contando uno de mas con el "<=" en el for
    for (var i = 0; i < x; i++){
        //asi no se agrega elementos a un vector en js
        //lenguajeInvertido = lenguajeInvertido + lenguaje[i].reverse();
        
        //eso ni en c++ jala, otra seria asi
        //lenguajeInvertido[i] = lenguaje[i].reverse();

        //la manera correcta es push o concat
        console.log(lenguaje[i]);
        lenguajeInvertido.push(invertirPalabra(lenguaje[i]));
    }
    return lenguajeInvertido;

}