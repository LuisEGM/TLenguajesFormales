import React from 'react';
import {connect} from 'react-redux';
import InvertirLenguaje from './operacionesLenguajes/invertirLenguaje';
import UnionLenguajes from './operacionesLenguajes/unionLenguajes';

const WorkinSpace = ({lenguajes,operacionSeleccionada}) => {

    const espacioDeOperaciones = () => {

        switch (operacionSeleccionada) {

            case 'inverso':
                return <InvertirLenguaje/>                
                

            case 'potencia':
                return <h3>potencia de un lenguaje</h3>
                

            case 'concatenacion':
                return <h3>concatenación de un lenguaje</h3>
                

            case 'interseccion':
                return <h3>Intersección de un lenguaje</h3>
                

            case 'diferencia':
                return <h3>Diferencia de un lenguaje</h3>
                

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