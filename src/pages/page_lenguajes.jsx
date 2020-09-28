import React, {Fragment} from 'react';
import Navegacion from '../components/navegacion';
import FormLenguaje from '../components/formLenguaje';
import ListLenguaje from '../components/listLenguaje';
import OperacionesLenguajes from '../components/operacionesLenguajes';
import {connect} from 'react-redux';

import '../styles/style-pageLenguajes.scss';

const Page_lenguajes = ({actualizarOperacionLenguaje}) => {
    
    const hanldeClick = e => {
        //esto es solo para quitar la seleccion en el menu
        document.querySelectorAll('li').forEach(elem => {
            // console.log(e.id);
            if(elem.id !== e.target.id){
                // console.log(e.id ," ? ",seleccion); 
                // debugger;
                if(elem.classList.contains('seleccionado')){
                    // debugger;
                    elem.classList.remove('seleccionado');
                    // debugger;
                }
            }
        });
        actualizarOperacionLenguaje(e.target.id)
    }

    return(
        <Fragment>
            <Navegacion location="pagelenguajes" />
            <div className="container p-4">
                <div className="row">
                    <FormLenguaje/>
                    <ListLenguaje/>
                </div>
                <hr/>
                <h2 id="limpio" onClick={hanldeClick} className="text-center title-options">Operaciones entre lenguajes</h2>
                <div className="row section-operaciones">
                    <OperacionesLenguajes/>            
                </div>
            </div>
        </Fragment>
    );
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({

    actualizarOperacionLenguaje(nuevaOperacion){
        dispatch({
            type: 'ACTUALIZAR_OPERACION_LENGUAJE',
            nuevaOperacion
        })
    }

})

export default connect(mapStateToProps,mapDispatchToProps)(Page_lenguajes);