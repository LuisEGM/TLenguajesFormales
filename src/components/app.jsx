import React from 'react';
import Page_lenguajes from '../pages/page_lenguajes';
import Page_alfabetos from '../pages/page_alfabetos';
import Page_palabras from '../pages/page_palabras';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import Store from '../store';

import { cardinalidadDePalabra, invertirPalabra, invertirLenguaje, diferenciaLenguajes2, interseccionLenguajes, uniondelenguajes, concatenacionLenguajes, diferenciaAlfabetos, interseccionAlfabetos} from '../modules/modulo1';

const App = () => {

    //zona Pruebas

    let lenguajes=[
        {
            nameLenguaje:"ingles",
            alfabeto:["carro","bota","cafe","solo","algo","ε"]
        },
        {
            nameLenguaje:"italiano",
            alfabeto:["carro","bot1a","cafe","solo1","algo"]
        },
        {
            nameLenguaje: 'Vacio',
            alfabeto: []
        },
        {
            nameLenguaje: 'Lenguaje Vacio',
            alfabeto: ["ε"]
        },
        {
            nameLenguaje:"tem1",
            alfabeto:["corr","beb"]
        },
        {
            nameLenguaje:"tem2",
            alfabeto:["er","o","imos"]
        }
    ];

    let alfabetos=[
        {
            nameAlfabeto:"ingles",
            simbolos:["c","b","g","s","a","ε"]
        },
        {
            nameAlfabeto:"italiano",
            simbolos:["c","b1","g","s1","a"]
        },
        {
            nameAlfabeto: 'Vacio',
            simbolos: []
        },
        {
            nameAlfabeto: 'Lenguaje Vacio',
            simbolos: ["ε"]
        }
    ];

   // console.log("Cardinalidad De Palabra: " ,cardinalidadDePalabra('sebarr'));
    //console.log("La palabra invertida seria: ",invertirPalabra('sebastian'));
    //console.log("El lenguaje invertido seria: ",invertirLenguaje(["carro","bota","cafe","solo","algo"]));
    //console.log("la diferencia  seria: ",diferenciaLenguajes2(lenguajes));
    //console.log("la union de los lenguajes seria",uniondelenguajes(lenguajes));
    // console.log("la interseccion de los lenguajes seria",interseccionLenguajes(lenguajes));
    // console.log("la concatenacion de los lenguajes seria",concatenacionLenguajes(lenguajes));
     console.log("la diferencia entre alfabetos  seria",diferenciaAlfabetos(alfabetos));
     console.log("la interseccion entre alfabetos  seria",interseccionAlfabetos(alfabetos));
    


    //cierre de zona
    
    
    return(
        <Provider store={Store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Page_lenguajes} />
                    <Route exact path="/alfabetos" component={Page_alfabetos} />
                    <Route exact path="/palabras" component={Page_palabras} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;