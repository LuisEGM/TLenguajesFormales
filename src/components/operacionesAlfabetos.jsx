import React, {Fragment} from 'react';
import '../styles/styles-operacionesLengujes.scss';
import { connect } from 'react-redux';
import WorkinSpaceAlfabetos from '../components/workinSpaceAlfabetos';

const OperacionesAlfabetos = ({actualizarOperacionAlfabeto}) => {

    const handleClick = e => {
        
        actualizarOperacionAlfabeto(e.target.id);
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
                    <li id="union" className="alf" onClick={handleClick} >Union entre Alfabetos</li>
                    <li id="diferencia" className="alf" onClick={handleClick} >Diferencia entre Alfabetos</li>
                    <li id="interseccion" className="alf" onClick={handleClick} >Intersección entre Alfabetos</li>
                </ul>
            </div>
            <div className="col-md-9 workin-space">
                <WorkinSpaceAlfabetos/>
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

export default connect(mapStateToProps,mapDispatchToProps)(OperacionesAlfabetos);