import React from 'react';
import {connect} from 'react-redux';

import UnionAlfabetos from './operacionesAlfabetos/unionAlfabetos';

const WorkinSpaceAlfabetos = ({operacionSeleccionada}) => {

    const espacioDeOperaciones = () => {

        switch (operacionSeleccionada) {

            
            case 'union':
                return <UnionAlfabetos/>
            
            case 'diferencia':
                return <h3>Diferencia alfabetos</h3>
                    
            case 'interseccion':
                return <h3>Interseccion alfabetos</h3>
            
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
    operacionSeleccionada: state.operacionAlfabeto,
})

const mapDispatchToProps = dispach => ({})

export default connect(mapStateToProps,mapDispatchToProps)(WorkinSpaceAlfabetos);