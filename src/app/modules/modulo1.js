//Transforma la propiedad alfabeto del objeto lenguaje.
export const vectorizarAlfabeto = (alfabeto) => {
    const vectorAlfabeto = alfabeto.split(" ");
    //arregla el bug del espacio en blanco agregado al vector
    return vectorAlfabeto.filter( e => e != '');
}

//Recibe la propiedad alfabeto(string) la transforma y le agraga el elemento unidad.
export const formatearAlfabeto = (alfabeto) => {
    
    const alfaVec = vectorizarAlfabeto(alfabeto);
    //console.log(alfaVec);
    return alfaVec;
}

export const imprimirAlfabetoFormateado = (Eleme) => {
    const {alfabeto} = Eleme
    const alfImp = formatearAlfabeto(alfabeto);
    let stringAlf = '{ ';
    alfImp.forEach((e,i) => {
        //cuando llegue al final que no escriba , si no que cierre la llave
        if(alfImp.length-1 == i){
            stringAlf = stringAlf + e + ' }';
        }
        else{
            stringAlf = stringAlf + e + ', ';
        }
    })
    return stringAlf;
}

export const cardinalidadDeUnLenguaje = (alfabeto) => {
    const cardinalidad = formatearAlfabeto(alfabeto).length;
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

    for (var i = 0; i <= x; i++){
        lenguajeInvertido = lenguajeInvertido + lenguaje[i].reverse();
    }
    return lenguajeInvertido;

}