//Transforma la propiedad alfabeto del objeto lenguaje.
export const vectorizarAlfabeto = (alfabeto) => {
    const vectorAlfabeto = alfabeto.split(" ");
    //arregla el bug del espacio en blanco agregado al vector
    return vectorAlfabeto.filter( e => e != '');
}

//Recibe la propiedad alfabeto(string) la transforma y le agraga el elemento unidad.
export const formatearAlfabeto = (alfabeto,elemUnidad) => {
    // console.log(alfabeto,elemUnidad);
    const alfaVec = vectorizarAlfabeto(alfabeto);
    //agrega al comienzo del vector
    alfaVec.unshift(elemUnidad);
    console.log(alfaVec);
    return alfaVec;
}

export const imprimirAlfabetoFormateado = ({alfabeto,elemUnidad}) => {
    const alfImp = formatearAlfabeto(alfabeto,elemUnidad);
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

export const cardinalidadDeUnLenguaje = (alfabeto,elemUnidad) => {
    const cardinalidad = formatearAlfabeto(alfabeto,elemUnidad).length;
    return cardinalidad;
}