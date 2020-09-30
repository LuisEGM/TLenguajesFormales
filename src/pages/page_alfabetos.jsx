import React, { Fragment } from 'react';
import Navegacion from '../components/navegacion';
import FormAlfabeto from '../components/formAlfabeto';
import ListAlfabetos from '../components/listAlfabetos';

import '../styles/style-pageLenguajes.scss';

const Page_alfabetos = () => {
    
    return(
        <Fragment>
            <Navegacion location="pagealfabetos" />
            <div className="container p-4">
                <div className="row">
                    <FormAlfabeto/>
                    <ListAlfabetos/>
                </div>
                <hr/>
                <h2 id="limpio" /*onClick={hanldeClick}*/ className="text-center title-options">Operaciones entre alfabetos</h2>
                <div className="row section-operaciones">
                    {/* <OperacionesLenguajes/>             */}
                </div>
            </div>
        </Fragment>
    );

}

export default Page_alfabetos;