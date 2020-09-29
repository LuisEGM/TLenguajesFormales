import React from 'react';
import Page_lenguajes from '../pages/page_lenguajes';
import Page_alfabetos from '../pages/page_alfabetos';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import Store from '../store';

import { cardinalidadDePalabra} from '../modules/modulo1';

const App = () => {

    //zona Pruebas

    console.log("Cardinalidad De Palabra: " ,cardinalidadDePalabra('sebarr'));




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