import React, {Fragment} from 'react';
import '../styles/styles-operacionesLengujes.scss';
import { connect } from 'react-redux';
import WorkinSpaceLenguajes from './workinSpaceLenguajes';

// import {useState} from 'react';

const OperacionesLenguajes = ({actualizarOperacionLenguaje}) => {

    // PARA REVISAR NO ACTUALIZA EN EL PRIMER CLICK.
    // const [seleccion, setSeleccion] = useState('');

    // const handleClick = e => {
    //     setSeleccion('actualiza?');
    //     console.log(seleccion);

    // }
    const handleClick = e => {
        
        actualizarOperacionLenguaje(e.target.id);
        // console.log(operacionSeleccionada);
        document.getElementById(e.target.id).classList.add('seleccionado');
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
    }

    return (
        <Fragment>
            <div className="col-md-3 menu">
                <ul>
                    <li id="inverso" onClick={handleClick} >Inverso de un lenguaje</li>
                    <li id="potencia" onClick={handleClick} >Potencia de un lenguaje</li>
                    <li id="concatenacion" onClick={handleClick} >Concatenación de lenguajes</li>
                    <li id="interseccion" onClick={handleClick} >Intersección de lenguajes</li>
                    <li id="diferencia" onClick={handleClick} >Diferencia entre lenguajes</li>
                    <li id="union" onClick={handleClick} >Union entre lenguajes</li>
                </ul>
            </div>
            <div className="col-md-9 workin-space">
                <WorkinSpaceLenguajes/>
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

export default connect(mapStateToProps,mapDispatchToProps)(OperacionesLenguajes);