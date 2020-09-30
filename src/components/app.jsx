import React from 'react';
import Page_lenguajes from '../pages/page_lenguajes';
import Page_alfabetos from '../pages/page_alfabetos';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import Store from '../store';

import { cardinalidadDePalabra, invertirPalabra, invertirLenguaje, diferenciaLenguajes2} from '../modules/modulo1';

const App = () => {

    //zona Pruebas

    let lenguajes=[
        {
            nameLenguaje:"ingles",
            alfabeto:["carro","bota","cafe","solo","algo"]
        },
        {
            nameLenguaje:"italiano",
            alfabeto:["carro1","bota","cafe","solo1","algo"]
        },
        {
            nameLenguaje: 'Vacio',
            alfabeto: ["Φ"]
        },
        {
            nameLenguaje: 'Lenguaje Vacio',
            alfabeto: ["ε"]
        }
    ];

    console.log("Cardinalidad De Palabra: " ,cardinalidadDePalabra('sebarr'));
    console.log("La palabra invertida seria: ",invertirPalabra('sebastian'));
    console.log("El lenguaje invertido seria: ",invertirLenguaje(["carro","bota","cafe","solo","algo"]));
    console.log("la diferencia  seria: ",diferenciaLenguajes2(lenguajes));
    


    //cierre de zona
    
    
    return(
        <Provider store={Store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Page_lenguajes} />
                    <Route exact path="/alfabetos" component={Page_alfabetos} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;