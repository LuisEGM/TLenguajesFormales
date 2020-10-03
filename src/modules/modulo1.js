export const vectorizarAlfabeto = (alfabeto) => {
    const vectorAlfabeto = alfabeto.split(" ");
    return vectorAlfabeto.filter( e => e !== '');
}

export const formatearAlfabeto = (alfabeto) => {
    const alfaVec = vectorizarAlfabeto(alfabeto);
    return alfaVec;
}

export const imprimirAlfabetoFormateado = (alfabeto) => {
    
    if(alfabeto.length !== 0){
        let stringAlf = '{ ';
        alfabeto.forEach((e,i) => {
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

export const invertirPalabra = (palabra) => {
    var x = palabra.length;
    var palabraInvertida = "";
    while (x>=0) {
      palabraInvertida = palabraInvertida + palabra.charAt(x);
      x--;
    }
    return palabraInvertida;
}

export const invertirLenguaje = (lenguaje) => {
    var x = lenguaje.length;
    var lenguajeInvertido = [];
    //console.log(x);
    //console.log(lenguaje);
    for (var i = 0; i < x; i++){
        //console.log(lenguaje[i]);
        lenguajeInvertido.push(invertirPalabra(lenguaje[i]));
    }
    return lenguajeInvertido;
}

export const diferenciaLenguajes = (lenguaje1, lenguaje2) =>{
    var x = lenguaje1.length;
    var y = lenguaje2.length;

    var diferenciaLenguaje = [];
    var flag =0;
    //console.log(x);
    //console.log(y);
    //console.log(lenguaje1);
    //console.log(lenguaje2);    
    for (var i = 0; i < x; i++){
        for (var j = 0; j < y; j++){
            if (lenguaje1[i] === lenguaje2[j]){
                flag++;
                break;
            }
        }
        if(flag===0){
            //console.log(lenguaje1[i]);
            diferenciaLenguaje.push(lenguaje1[i]);
        }else{
            flag=0;
        }
    }
    return diferenciaLenguaje;
}

export const uniondelenguajes = (lenguajes) =>{
    var l = lenguajes.length;
    var union = [];
    for(var i = 0; i < l; i++){
        var lenguaje = lenguajes[i].alfabeto;
        var x = lenguaje.length;
        if(lenguajes[i].nameLenguaje !== "Vacio" ){
            for(var j = 0; j < x; j++){
                union.push(lenguaje[j])     
            }
        }
    }
    union = [...new Set(union)];
    return union;
}

export const diferenciaLenguajes2 = (lenguajes) =>{
    var lenguaje1= lenguajes[0].alfabeto;
    var lenguaje2= lenguajes[1].alfabeto;
    var x = lenguaje1.length;
    var y = lenguaje2.length;

    var diferenciaLenguaje = [];
    var flag =0;
    //console.log(x);
    //console.log(y);
    //console.log(lenguaje1);
    //console.log(lenguaje2);
    for (var i = 0; i < x; i++){
        for (var j = 0; j < y; j++){
            if (lenguaje1[i] === lenguaje2[j]){
                flag++;
                break;
            }
        }
        if(flag===0){
            //console.log(lenguaje1[i]);
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
    //console.log(x);
    //console.log(y);
    //console.log(lenguaje1);
    //console.log(lenguaje2);
    for (var i = 0; i < x; i++){
        for (var j = 0; j < y; j++){
            if (lenguaje1[i] === lenguaje2[j]){
                flag++;
                break;
            }
        }
        if(flag===1){
            //console.log(lenguaje1[i]);
            interseccionLenguaje.push(lenguaje1[i]);
            flag=0;
        }else{
            flag=0;
        }
    }
    return interseccionLenguaje;
}


export const concatenacionLenguajes = (lenguajes) =>{
    var lenguaje1= lenguajes[0].alfabeto;
    var lenguaje2= lenguajes[1].alfabeto;
    var nomLenguaje1 = lenguajes[0].nameLenguaje;
    var nomLenguaje2 = lenguajes[1].nameLenguaje;

    var x = lenguaje1.length;
    var y = lenguaje2.length;

    var concatenacionLenguaje = [];
    //console.log(x);
    //console.log(y);
    //console.log(lenguaje1);
    //console.log(lenguaje2);
    for (var i = 0; i < x; i++){
        for (var j = 0; j < y; j++){
            if(nomLenguaje1==="Lenguaje Vacio"){
                concatenacionLenguaje.push(lenguaje2[j]);
            }
            if(nomLenguaje2==="Lenguaje Vacio"){
                concatenacionLenguaje.push(lenguaje1[i]);
            }
            if(nomLenguaje1==="Vacio"|| nomLenguaje2==="Vacio"){
                return ["Φ"];
            }
            if(nomLenguaje1!="Lenguaje Vacio" && nomLenguaje2!="Lenguaje Vacio" && nomLenguaje1!="Vacio" && nomLenguaje2!="Vacio"){
                if(lenguaje1[i]==="ε"){
                    concatenacionLenguaje.push(lenguaje2[j]);
                }if(lenguaje2[j]==="ε"){
                    concatenacionLenguaje.push(lenguaje1[i]);
                }
                if(lenguaje1[i]!="ε"&& lenguaje2[j]!="ε"){
                    concatenacionLenguaje.push(lenguaje1[i]+lenguaje2[j]);
                }
            }
        }
    }
    return concatenacionLenguaje;
}

export const diferenciaAlfabetos = (alfabetos) =>{
    var alfabeto1= alfabetos[0].simbolos;
    var alfabeto2= alfabetos[1].simbolos;
    var x = alfabeto1.length;
    var y = alfabeto2.length;

    var diferenciaAlfabeto = [];
    var flag =0;
    //console.log(x);
    //console.log(y);
    //console.log(alfabeto1);
    //console.log(alfabeto2);    
    for (var i = 0; i < x; i++){
        for (var j = 0; j < y; j++){
            if (alfabeto1[i] === alfabeto2[j]){
                flag++;
                break;
            }
        }
        if(flag===0){
            //console.log(alfabeto1[i]);
            diferenciaAlfabeto.push(alfabeto1[i]);
        }else{
            flag=0;
        }
    }
    return diferenciaAlfabeto;
}

export const interseccionAlfabetos = (alfabetos) =>{
    var alfabeto1= alfabetos[0].simbolos;
    var alfabeto2= alfabetos[1].simbolos;
    var x = alfabeto1.length;
    var y = alfabeto2.length;

    var interseccionAlfabetos = [];
    var flag =0;
    //console.log(x);
    //console.log(y);
    //console.log(alfabeto1);
    //console.log(alfabeto2);
    for (var i = 0; i < x; i++){
        for (var j = 0; j < y; j++){
            if (alfabeto1[i] === alfabeto2[j]){
                flag++;
                break;
            }
        }
        if(flag===1){
            //console.log(alfabeto1[i]);
            interseccionAlfabetos.push(alfabeto1[i]);
            flag=0;
        }else{
            flag=0;
        }
    }
    return interseccionAlfabetos;
}

export const uniondealfabetos = (alfabetos) =>{
    var l = alfabetos.length;
    var union = [];
    for(var i = 0; i < l; i++ ){
        var alfabeto = alfabetos[i].simbolos;
        var x = alfabeto.length;
        if(alfabetos[i].nameAlfabeto !== "Vacio"){
            for(var j = 0; j < x; j++){
                union.push(alfabeto[j]);
            }
        }
    }
    union = [...new Set(union)];
    return union;
}

//funciona
export const potenciaLenguaje = (lenguaje,potencia) => {
    if(potencia != 0){
        if(potencia !== 1){
            const leng = lenguaje;
            var resultadoParcial = {nameLenguaje: "resParcial",alfabeto: []}
            resultadoParcial.alfabeto = lenguaje.alfabeto;
            for(let i=2 ; i <= potencia ; i++){
                resultadoParcial.alfabeto = concatenacionLenguajes([resultadoParcial,leng]);
            }
            return resultadoParcial.alfabeto;
        }
        else{
            return [lenguaje];
        }
    }
    else{
        return ["ε"]
    }

}


// Seccion de potencia con recursividad sin validacion de vacio y lenguaje vacio, pot15 mas de 14 millones de concatenaciones

const concatenacionEspecialAlfabetos = (alfabetos) =>{
    var lenguaje1= alfabetos[0];
    var lenguaje2= alfabetos[1];
    var x = lenguaje1.length;
    var y = lenguaje2.length;
    var concatenacionLenguaje = [];
    for (var i = 0; i < x; i++){
        for (var j = 0; j < y; j++){
                concatenacionLenguaje.push(lenguaje1[i]+lenguaje2[j]);        
        }
    }
    return concatenacionLenguaje;
}

export const potenciaLenguajeRecursiva = (alfabeto,potencia) => {
    const alf = alfabeto;
    var resultadoParcial = [];
    resultadoParcial = alfabeto;
    if(potencia == 1){
        resultadoParcial = alfabeto;
    }
    else{
        resultadoParcial = concatenacionEspecialAlfabetos([potenciaLenguajeRecursiva(resultadoParcial,potencia-1),alf])
    }
    return resultadoParcial;
}