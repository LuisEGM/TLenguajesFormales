import React,{Fragment} from 'react';
import {connect} from 'react-redux';

const WorkinSpace = ({lenguajes,operacionSeleccionada}) => {

    const espacioDeOperaciones = () => {

        switch (operacionSeleccionada) {

            case 'inverso':
                return <h3>Inverso</h3>
                // return (<Fragment>
                //     <h3>Inverso de un lenguaje</h3>
                //     <div className="inverso__form">
                //         <select class="form-control">
                //             {lenguajes.map(e => (
                //                 <option key={e.nameLenguaje}>{e.nameLenguaje}</option>
                //             ))}
                //         </select>
                //     </div>
                // </Fragment>);
                

            case 'potencia':
                return <h3>potencia de un lenguaje</h3>
                

            case 'concatenacion':
                return <h3>concatenación de un lenguaje</h3>
                

            case 'interseccion':
                return <h3>Intersección de un lenguaje</h3>
                

            case 'diferencia':
                return <h3>Diferencia de un lenguaje</h3>
                

            case 'union':
                return <h3>Unión de un lenguaje</h3>
                
            
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