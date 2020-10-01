import React, { Fragment } from 'react';
import Navegacion from '../components/navegacion';
import FormAlfabeto from '../components/formAlfabeto';
import ListAlfabetos from '../components/listAlfabetos';
import OperacionesAlfabetos from '../components/operacionesAlfabetos';
import {connect} from 'react-redux';


import '../styles/style-pageLenguajes.scss';
import operacionesAlfabetos from '../components/operacionesAlfabetos';

const Page_alfabetos = ({actualizarOperacionAlfabeto}) => {
    
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
        actualizarOperacionAlfabeto(e.target.id)
    }

    return(
        <Fragment>
            <Navegacion location="pagealfabetos" />
            <div className="container p-4">
                <div className="row">
                    <FormAlfabeto/>
                    <ListAlfabetos/>
                </div>
                <hr/>
                <h2 id="limpio" onClick={hanldeClick} className="text-center title-options">Operaciones entre alfabetos</h2>
                <div className="row section-operaciones">
                    <OperacionesAlfabetos/>            
                </div>
            </div>
        </Fragment>
    );

}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({

    actualizarOperacionAlfabeto(nuevaOperacion){
        dispatch({
            type: 'ACTUALIZAR_OPERACION_ALFABETO',
            nuevaOperacion
        })
    }

})

export default connect(mapStateToProps,mapDispatchToProps)(Page_alfabetos);