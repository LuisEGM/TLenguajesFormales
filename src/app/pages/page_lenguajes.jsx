import React, {Fragment} from 'react';
import Navegacion from '../components/navegacion';
import FormLenguaje from '../components/formLenguaje';
import ListLenguaje from '../components/listLenguaje';

const Page_lenguajes = () => {
    
    return(
        <Fragment>
            <Navegacion location="pagelenguajes" />
            <div className="container p-4">
                <div className="row">
                    <FormLenguaje/>
                    <ListLenguaje/>
                </div>
                <hr/>
            </div>
        </Fragment>
    );
}

export default Page_lenguajes;