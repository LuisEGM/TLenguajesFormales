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

export const imprimirAlfabetoFormateadoLen = (lenguaje) => {
    
    if(lenguaje.nameLenguaje === 'Vacio'){
        return lenguaje.alfabeto[0];
    }
    else{
        if(lenguaje.alfabeto.length !== 0){
            let stringAlf = '{ ';
            lenguaje.alfabeto.forEach((e,i) => {
                //cuando llegue al final que no escriba , si no que cierre la llave
                if(lenguaje.alfabeto.length-1 === i){
                    stringAlf = stringAlf + e + ' }';
                }
                else{
                    stringAlf = stringAlf + e + ', ';
                }
            })
            return stringAlf;
        }   
    }
}

export const imprimirSimbolosFormateado = (alfabeto) => {
    
    if(alfabeto.simbolos.length !== 0){
        let stringAlf = '{ ';
        alfabeto.simbolos.forEach((e,i) => {
            //cuando llegue al final que no escriba , si no que cierre la llave
            if(alfabeto.simbolos.length-1 === i){
                stringAlf = stringAlf + e + ' }';
            }
            else{
                stringAlf = stringAlf + e + ', ';
            }
        })
        return stringAlf;
    }   

}

export const cardinalidadDeUnLenguaje = (lenguaje) => {
    if(lenguaje.nameLenguaje === 'Vacio'){
        return 0
    }
    return lenguaje.alfabeto.length;
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


export const diferenciaLenguajes = (lenguaje1, lenguaje2) =>{
    var x = lenguaje1.length;
    var y = lenguaje2.length;

    var diferenciaLenguaje = [];
    var flag =0;
    console.log(x);
    console.log(y);
    console.log(lenguaje1);
    console.log(lenguaje2);
    
        for (var i = 0; i < x; i++){
            for (var j = 0; j < y; j++){
                if (lenguaje1[i] === lenguaje2[j]){
                    flag++;
                    break;
                }


            }
            if(flag===0){
                console.log(lenguaje1[i]);
                diferenciaLenguaje.push(lenguaje1[i]);
            }else{
                flag=0;
            }

        }


    return diferenciaLenguaje;
    

}

export const uniondelenguajes = (lenguaje) =>{
    var lenguaje1 = lenguaje[0].alfabeto;
    var lenguaje2 = lenguaje[1].alfabeto;
    console.log(lenguaje[2].alfabeto);
    var x = lenguaje1.length;
    var y = lenguaje2.length;
        
        for(var i = 0; i < y; i++){
            lenguaje1.push(lenguaje2[i]);
        }

        //eliminando repetidos
        var union = [... new Set(lenguaje1)];
    
  
    return union;
}

export const diferenciaLenguajes2 = (lenguajes) =>{
    var lenguaje1= lenguajes[0].alfabeto;
    var lenguaje2= lenguajes[1].alfabeto;
    var x = lenguaje1.length;
    var y = lenguaje2.length;

    var diferenciaLenguaje = [];
    var flag =0;
    console.log(x);
    console.log(y);
    console.log(lenguaje1);
    console.log(lenguaje2);
    
        for (var i = 0; i < x; i++){
            for (var j = 0; j < y; j++){
                if (lenguaje1[i] === lenguaje2[j]){
                    flag++;
                    break;
                }


            }
            if(flag===0){
                console.log(lenguaje1[i]);
                diferenciaLenguaje.push(lenguaje1[i]);
            }else{
                flag=0;
            }

        }


    return diferenciaLenguaje;
    

}


export const interseccionLenguajes = (lenguajes) =>{
    var lenguaje1= lenguajes[0].alfabeto;
    var lenguaje2= lenguajes[1].alfabeto;
    var x = lenguaje1.length;
    var y = lenguaje2.length;

    var interseccionLenguaje = [];
    var flag =0;
    console.log(x);
    console.log(y);
    console.log(lenguaje1);
    console.log(lenguaje2);
    
        for (var i = 0; i < x; i++){
            for (var j = 0; j < y; j++){
                if (lenguaje1[i] === lenguaje2[j]){
                    flag++;
                    break;
                }
            }
            if(flag===1){
                console.log(lenguaje1[i]);
                interseccionLenguaje.push(lenguaje1[i]);
                flag=0;
            }else{
                flag=0;
            }

        }
     return interseccionLenguaje;
    

}


export const concatenacionLenguajes = (lenguajes) =>{
    var lenguaje1= lenguajes[4].alfabeto;
    var lenguaje2= lenguajes[5].alfabeto;
    var nomLenguaje1 = lenguajes[4].nameLenguaje;
    var nomLenguaje2 = lenguajes[5].nameLenguaje;

    var x = lenguaje1.length;
    var y = lenguaje2.length;

    var concatenacionLenguaje = [];
    console.log(x);
    console.log(y);
    console.log(lenguaje1);
    console.log(lenguaje2);
    
        for (var i = 0; i < x; i++){
            for (var j = 0; j < y; j++){
                if(nomLenguaje1==="Lenguaje Vacio"){
                    concatenacionLenguaje.push(lenguaje2[j]);

                }
                if(nomLenguaje2==="Lenguaje Vacio"){
                    concatenacionLenguaje.push(lenguaje1[i]);

                }
                if(nomLenguaje1==="Vacio"|| nomLenguaje2==="Vacio"){
                    return "Φ";
                }
                if(nomLenguaje1!="Lenguaje Vacio" && nomLenguaje2!="Lenguaje Vacio" && nomLenguaje1!="Vacio" && nomLenguaje2!="Vacio"){
                    concatenacionLenguaje.push(lenguaje1[i]+lenguaje2[j]);
                }
                
            }
            

        }
     return concatenacionLenguaje;
    

}
