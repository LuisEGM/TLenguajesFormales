import React, { Fragment } from 'react';
import Navegacion from '../components/navegacion';

import FormPalabras from '../components/formPalabra';
import ListPalabras from '../components/listPalabras';    

import '../styles/style-pagePalabras.scss';

const Page_palabras = () => {
    return(
        <Fragment>
            <Navegacion location="pagepalabras" />
            <div className="container p-4">
                <div className="row">
                    <FormPalabras/>
                    <ListPalabras/>
                </div>
            </div>
        </Fragment>
    );
}

export default Page_palabras;