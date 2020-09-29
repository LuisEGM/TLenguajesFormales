import React, {useState} from 'react';
import {connect} from 'react-redux';

const WorkinSpace = ({lenguajes,operacionSeleccionada}) => {

    const [lenguajesSeleccionado,setlenguajesSeleccionado] = useState([]);

    const handleChange = e => {
        console.log("change");
    }

    const handleClick = e => {
        console.log("click sirve");
    }

    const espacioDeOperaciones = () => {

        switch (operacionSeleccionada) {

            case 'inverso':
                return (
                    <div className="inverso">
                        <h3>Inverso de un lenguaje</h3>
                        <div className="inverso__form">
                            <select onChange={handleChange} defaultValue="defecto" className="form-control">
                                {lenguajes.map(e => (
                                    <option name="inversoLenguaje" key={e.nameLenguaje}>{e.nameLenguaje}</option>
                                ))}
                            </select>
                            <button onClick={handleClick} className="btn btn-primary boton">GO</button>
                        </div>
                        <div className="salida">
                            <p>
                            {
                                
                            }
                            </p>
                        </div>
                    </div>);
                

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