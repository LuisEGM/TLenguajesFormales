import React from 'react';
import {connect} from 'react-redux';

import InvertirLenguaje from './operacionesLenguajes/invertirLenguaje';
import UnionLenguajes from './operacionesLenguajes/unionLenguajes';
import PotenciaLenguaje from './operacionesLenguajes/potenciaLenguaje';
import ConcatenacionLenguajes from './operacionesLenguajes/concatenacionLenguajes';
import InterseccionLenguajes from './operacionesLenguajes/interseccionLenguajes';
import DiferenciaLenguajes from './operacionesLenguajes/diferenciaLenguajes';

const WorkinSpace = ({lenguajes,operacionSeleccionada}) => {

    const espacioDeOperaciones = () => {

        switch (operacionSeleccionada) {

            case 'inverso':
                return <InvertirLenguaje/>                
                

            case 'potencia':
                return <PotenciaLenguaje/>
                

            case 'concatenacion':
                return <ConcatenacionLenguajes/>
                

            case 'interseccion':
                return <InterseccionLenguajes/>
                

            case 'diferencia':
                return <DiferenciaLenguajes/>
                

            case 'union':
                return <UnionLenguajes/>
                
            
            default:
                return <div className="limpio">
                    <div className="images">
                        <img src="https://www.flaticon.es/svg/static/icons/svg/3227/3227485.svg" alt="direccion"/>
                        <img src="https://www.flaticon.es/svg/static/icons/svg/2555/2555375.svg" alt="Opciones"/>
                    </div>
                    <p>Selecciona una de las opciones que se encuentran en el menú</p>
                </div> 
                        
        }

    }

    return(
        espacioDeOperaciones()
    );

}


const mapStateToProps = state => ({
    operacionSeleccionada: state.operacionLenguaje,
    lenguajes: state.listLenguajes
})

const mapDispatchToProps = dispach => ({})

export default connect(mapStateToProps,mapDispatchToProps)(WorkinSpace);